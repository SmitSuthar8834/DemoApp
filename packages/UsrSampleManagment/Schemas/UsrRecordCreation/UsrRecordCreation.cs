using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Web.Common;
using global::Common.Logging;
using System.Globalization;

namespace Terrasoft.Configuration.UsrRecordCreationNamespace
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public partial class UsrRecordCreation : BaseService
    {
        private readonly ILog _logger = LogManager.GetLogger("UsrRecordCreationLogger");

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, 
                   BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public RecordCreationResponse CreateRecord(string UsrProductCode, int UsrQuantity, 
            string UsrTrackingNumber, string UsrCourierName, string UsrUnitOfMeasure, 
            string UsrCustomerCode, string UsrRequestedByEmail, string UsrTransportMode,
            string UsrPriority, string UsrSampleType, string UsrSampleStatus, string UsrProducttype,
            string UsrNotes, string UsrProductName, string UsrCustomerName, string UsrRequestedBy, 
            string UsrExpectedDeliveryDate, string UsrRequestedDate, string UsrReferenceNumber, string UsrReferenceSalesQuoteId, 
            string UsrShipmentDate, List<ProductInfo> Products, bool SelectAlternateContact,
            string AlternateContactPhone, string AlternateContactEmail, string AlternateContact_formattedName,
            string PartyName, string PhoneFormattedNumber, string Email)
        {
            return ExecuteWithErrorHandling(() =>
            {
                var dates = ParseDates(UsrExpectedDeliveryDate, UsrRequestedDate, UsrShipmentDate);
                return CreateRecordInternal(UsrProductCode, UsrQuantity, UsrTrackingNumber, 
                    UsrCourierName, UsrUnitOfMeasure, UsrCustomerCode, UsrRequestedByEmail,
                    UsrTransportMode, UsrPriority, UsrSampleType, UsrSampleStatus, UsrProducttype, 
                    UsrNotes, UsrProductName, UsrCustomerName, UsrRequestedBy, dates.Item1, 
                    dates.Item2, dates.Item3, UsrReferenceNumber, UsrReferenceSalesQuoteId, Products,
                    SelectAlternateContact, AlternateContactPhone, AlternateContactEmail, 
                    AlternateContact_formattedName, PartyName, PhoneFormattedNumber, Email);
            });
        }

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, 
                   BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public RecordCreationResponse UpdateRecord(string UsrReferenceNumber, string UsrProductCode, 
            int? UsrQuantity, string UsrTrackingNumber, string UsrCourierName, string UsrUnitOfMeasure, 
            string UsrCustomerCode, string UsrRequestedByEmail, string UsrTransportMode,
            string UsrPriority, string UsrSampleType, string UsrSampleStatus, string UsrProducttype,
            string UsrNotes, string UsrProductName, string UsrCustomerName, string UsrRequestedBy, 
            string UsrExpectedDeliveryDate, string UsrRequestedDate, string UsrShipmentDate, 
            string UsrReferenceSalesQuoteId, List<ProductInfo> Products, bool SelectAlternateContact,
            string AlternateContactPhone, string AlternateContactEmail, string AlternateContact_formattedName,
            string PartyName, string PhoneFormattedNumber, string Email)
        {
            return ExecuteWithErrorHandling(() =>
            {
                if (string.IsNullOrEmpty(UsrReferenceNumber))
                    throw new ArgumentException("Reference Number is required for update");

                var dates = ParseDates(UsrExpectedDeliveryDate, UsrRequestedDate, UsrShipmentDate);
                return UpdateRecordInternal(UsrReferenceNumber, UsrProductCode, UsrQuantity, 
                    UsrTrackingNumber, UsrCourierName, UsrUnitOfMeasure, UsrCustomerCode, 
                    UsrRequestedByEmail, UsrTransportMode, UsrPriority, UsrSampleType, 
                    UsrSampleStatus, UsrProducttype, UsrNotes, UsrProductName, UsrCustomerName, 
                    UsrRequestedBy, dates.Item1, dates.Item2, dates.Item3, UsrReferenceSalesQuoteId, Products,
                    SelectAlternateContact, AlternateContactPhone, AlternateContactEmail, 
                    AlternateContact_formattedName, PartyName, PhoneFormattedNumber, Email);
            });
        }

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, 
                   BodyStyle = WebMessageBodyStyle.Wrapped, ResponseFormat = WebMessageFormat.Json)]
        public RecordCreationResponse TestUpdateRecord(string UsrReferenceNumber, string UsrNotes)
        {
            return ExecuteWithErrorHandling(() =>
            {
                var record = GetRecordByReference(GetUserConnection(), UsrReferenceNumber);
                if (!string.IsNullOrEmpty(UsrNotes))
                {
                    record.SetColumnValue("UsrNotes", UsrNotes);
                    record.Save();
                }

                return new RecordCreationResponse
                {
                    Message = "Test record updated successfully",
                    RecordId = record.PrimaryColumnValue.ToString(),
                    UsrReferenceNumber = UsrReferenceNumber,
                    Samplecode = ""
                };
            });
        }

        private RecordCreationResponse ExecuteWithErrorHandling(Func<RecordCreationResponse> operation)
        {
            try
            {
                return operation();
            }
            catch (Exception ex)
            {
                _logger.Error($"Service error: {ex}");
                return new RecordCreationResponse
                {
                    Message = $"Error: {ex.Message}",
                    RecordId = null
                };
            }
        }

        private Tuple<DateTime?, DateTime?, DateTime?> ParseDates(string expectedDelivery, string requested, string shipment)
        {
            return new Tuple<DateTime?, DateTime?, DateTime?>(
                ParseDateTime(expectedDelivery),
                ParseDateTime(requested),
                ParseDateTime(shipment)
            );
        }

        private Entity GetRecordByReference(UserConnection userConnection, string referenceNumber)
        {
            var schema = userConnection.EntitySchemaManager.GetInstanceByName("UsrSampleManagment");
            if (schema == null) throw new Exception("UsrSampleManagment schema not found");

            var esq = new EntitySchemaQuery(schema);
            esq.PrimaryQueryColumn.IsAlwaysSelect = true;
            esq.AddAllSchemaColumns();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrReferenceNumber", referenceNumber));

            var collection = esq.GetEntityCollection(userConnection);
            if (collection.Count == 0) throw new Exception($"Record with Reference Number '{referenceNumber}' not found");
            if (collection.Count > 1) throw new Exception($"Multiple records found with Reference Number '{referenceNumber}'");

            return collection[0];
        }

        private RecordCreationResponse UpdateRecordInternal(string referenceNumber, string productCode, int? quantity,
            string trackingNumber, string courierName, string unitOfMeasure, string customerCode, 
            string requestedByEmail, string transportMode, string priority, string sampleType, 
            string sampleStatus, string productType, string notes, string productName, 
            string customerName, string requestedBy, DateTime? expectedDeliveryDate, 
            DateTime? requestedDate, DateTime? shipmentDate, string referenceSalesQuoteId, List<ProductInfo> products,
            bool selectAlternateContact, string alternateContactPhone, string alternateContactEmail, 
            string alternateContact_formattedName, string partyName, string phoneFormattedNumber, string email)
        {
            var userConnection = GetUserConnection();
            var record = GetRecordByReference(userConnection, referenceNumber);

            // Update simple fields
            UpdateFieldIfNotEmpty(record, "UsrProductCode", productCode);
            UpdateFieldIfNotEmpty(record, "UsrTrackingNumber", trackingNumber);
            UpdateFieldIfNotEmpty(record, "UsrCourierName", courierName);
            UpdateFieldIfNotEmpty(record, "UsrUnitOfMeasure", unitOfMeasure);
            UpdateFieldIfNotEmpty(record, "UsrCustomerCode", customerCode);
            UpdateFieldIfNotEmpty(record, "UsrRequestedByEmail", requestedByEmail);
            UpdateFieldIfNotEmpty(record, "UsrNotes", notes);
            UpdateFieldIfNotEmpty(record, "UsrReferenceSalesQuoteId", referenceSalesQuoteId);

            if (quantity.HasValue) record.SetColumnValue("UsrQuantity", quantity.Value);
            if (expectedDeliveryDate.HasValue) record.SetColumnValue("UsrExpectedDeliveryDate", expectedDeliveryDate.Value);
            if (requestedDate.HasValue) record.SetColumnValue("UsrRequestedDate", requestedDate.Value);
            if (shipmentDate.HasValue) record.SetColumnValue("UsrShipmentDate", shipmentDate.Value);

            // Update lookups
            UpdateLookupField(userConnection, record, "UsrTransportMode", "UsrTransportModeId", transportMode);
            UpdateLookupField(userConnection, record, "UsrPriority", "UsrPriorityId", priority);
            UpdateLookupField(userConnection, record, "UsrSampleType", "UsrSampleTypeId", sampleType);
            UpdateLookupField(userConnection, record, "UsrSampleStatus", "UsrSampleStatusId", sampleStatus);
            
            // Update UsrProducttype lookup (only if found, don't create new)
            UpdateLookupFieldNoCreate(userConnection, record, "UsrProducttype", "UsrProducttypeId", productType);

            // Update related entities
            UpdateRelatedEntity(userConnection, record, "Account", "UsrCustomerNameId", customerName);
            UpdateRelatedEntity(userConnection, record, "Contact", "UsrRequestedById", requestedBy);

            // Handle alternate contact logic
            if (selectAlternateContact)
            {
                var contactName = !string.IsNullOrEmpty(alternateContact_formattedName) ? alternateContact_formattedName : partyName;
                var contactEmail = !string.IsNullOrEmpty(alternateContactEmail) ? alternateContactEmail : email;
                var contactPhone = !string.IsNullOrEmpty(alternateContactPhone) ? alternateContactPhone : phoneFormattedNumber;

                if (!string.IsNullOrEmpty(contactName))
                {
                    var contactId = GetOrCreateContactWithDetails(userConnection, contactName, contactEmail, contactPhone);
                    if (contactId != Guid.Empty)
                        record.SetColumnValue("UsrContactId", contactId);
                }
            }

            record.Save();

            // Update products
            if (products != null)
            {
                DeleteExistingProductDetails(userConnection, record.PrimaryColumnValue);
                if (products.Count > 0)
                    CreateProductDetails(userConnection, record.PrimaryColumnValue, products);
            }

            return new RecordCreationResponse
            {
                Message = "Record updated successfully",
                RecordId = record.PrimaryColumnValue.ToString(),
                UsrReferenceNumber = referenceNumber,
                Samplecode = ""
            };
        }

        private RecordCreationResponse CreateRecordInternal(string productCode, int quantity, string trackingNumber, 
            string courierName, string unitOfMeasure, string customerCode, string requestedByEmail, 
            string transportMode, string priority, string sampleType, string sampleStatus, 
            string productType, string notes, string productName, string customerName, 
            string requestedBy, DateTime? expectedDeliveryDate, DateTime? requestedDate, 
            DateTime? shipmentDate, string referenceNumber, string referenceSalesQuoteId, List<ProductInfo> products,
            bool selectAlternateContact, string alternateContactPhone, string alternateContactEmail, 
            string alternateContact_formattedName, string partyName, string phoneFormattedNumber, string email)
        {
            var userConnection = GetUserConnection();
            var schema = userConnection.EntitySchemaManager.GetInstanceByName("UsrSampleManagment");
            if (schema == null) throw new Exception("UsrSampleManagment schema not found");

            var record = schema.CreateEntity(userConnection);
            record.SetDefColumnValues();

            // Set simple fields
            record.SetColumnValue("UsrProductCode", productCode);
            record.SetColumnValue("UsrQuantity", quantity);
            record.SetColumnValue("UsrTrackingNumber", trackingNumber);
            record.SetColumnValue("UsrCourierName", courierName);
            record.SetColumnValue("UsrUnitOfMeasure", unitOfMeasure);
            record.SetColumnValue("UsrCustomerCode", customerCode);
            record.SetColumnValue("UsrRequestedByEmail", requestedByEmail);
            record.SetColumnValue("UsrNotes", notes);
            record.SetColumnValue("UsrReferenceNumber", referenceNumber);
            record.SetColumnValue("UsrReferenceSalesQuoteId", referenceSalesQuoteId);

            // Set dates
            if (expectedDeliveryDate.HasValue) record.SetColumnValue("UsrExpectedDeliveryDate", expectedDeliveryDate.Value);
            if (requestedDate.HasValue) record.SetColumnValue("UsrRequestedDate", requestedDate.Value);
            if (shipmentDate.HasValue) record.SetColumnValue("UsrShipmentDate", shipmentDate.Value);

            // Set lookups
            SetLookupField(userConnection, record, "UsrTransportMode", "UsrTransportModeId", transportMode);
            SetLookupField(userConnection, record, "UsrPriority", "UsrPriorityId", priority);
            SetLookupField(userConnection, record, "UsrSampleType", "UsrSampleTypeId", sampleType);
            SetLookupField(userConnection, record, "UsrSampleStatus", "UsrSampleStatusId", sampleStatus);
            
            // Set UsrProducttype lookup (only if found, don't create new)
            SetLookupFieldNoCreate(userConnection, record, "UsrProducttype", "UsrProducttypeId", productType);

            // Set related entities
            SetRelatedEntity(userConnection, record, "Account", "UsrCustomerNameId", customerName);
            SetRelatedEntity(userConnection, record, "Contact", "UsrRequestedById", requestedBy);

            // Handle alternate contact logic
            if (selectAlternateContact)
            {
                var contactName = !string.IsNullOrEmpty(alternateContact_formattedName) ? alternateContact_formattedName : partyName;
                var contactEmail = !string.IsNullOrEmpty(alternateContactEmail) ? alternateContactEmail : email;
                var contactPhone = !string.IsNullOrEmpty(alternateContactPhone) ? alternateContactPhone : phoneFormattedNumber;

                if (!string.IsNullOrEmpty(contactName))
                {
                    var contactId = GetOrCreateContactWithDetails(userConnection, contactName, contactEmail, contactPhone);
                    if (contactId != Guid.Empty)
                        record.SetColumnValue("UsrContactId", contactId);
                }
            }

            record.Save();

            // Create products
            if (products != null && products.Count > 0)
                CreateProductDetails(userConnection, record.PrimaryColumnValue, products);

            string sampleCode = record.GetTypedColumnValue<string>("UsrSampleCode");

            return new RecordCreationResponse
            {
                Message = "Record created successfully",
                RecordId = record.PrimaryColumnValue.ToString(),
                UsrReferenceNumber = referenceNumber,
                Samplecode = sampleCode
            };
        }

        private Guid GetOrCreateContactWithDetails(UserConnection userConnection, string name, string email, string phone)
        {
            try
            {
                var schema = userConnection.EntitySchemaManager.GetInstanceByName("Contact");
                if (schema == null) return Guid.Empty;

                // First try to find existing contact by name
                var esq = new EntitySchemaQuery(schema);
                esq.PrimaryQueryColumn.IsAlwaysSelect = true;
                esq.AddColumn("Email");
                esq.AddColumn("MobilePhone");
                esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", name));

                var collection = esq.GetEntityCollection(userConnection);
                if (collection.Count > 0)
                {
                    // Update existing contact with new email/phone if provided
                    var existingContact = collection[0];
                    bool needsUpdate = false;

                    if (!string.IsNullOrEmpty(email) && existingContact.GetTypedColumnValue<string>("Email") != email)
                    {
                        existingContact.SetColumnValue("Email", email);
                        needsUpdate = true;
                    }

                    if (!string.IsNullOrEmpty(phone) && existingContact.GetTypedColumnValue<string>("MobilePhone") != phone)
                    {
                        existingContact.SetColumnValue("MobilePhone", phone);
                        needsUpdate = true;
                    }

                    if (needsUpdate)
                        existingContact.Save();

                    return existingContact.PrimaryColumnValue;
                }

                // Create new contact
                var entity = schema.CreateEntity(userConnection);
                entity.SetDefColumnValues();
                entity.SetColumnValue("Name", name);
                
                if (!string.IsNullOrEmpty(email))
                    entity.SetColumnValue("Email", email);
                
                if (!string.IsNullOrEmpty(phone))
                    entity.SetColumnValue("MobilePhone", phone);

                entity.Save();
                return entity.PrimaryColumnValue;
            }
            catch (Exception ex)
            {
                _logger.Error($"Error getting/creating Contact '{name}' with details: {ex.Message}");
                return Guid.Empty;
            }
        }

        private void UpdateFieldIfNotEmpty(Entity entity, string fieldName, string value)
        {
            if (!string.IsNullOrEmpty(value))
                entity.SetColumnValue(fieldName, value);
        }

        private void UpdateLookupField(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string value)
        {
            if (!string.IsNullOrEmpty(value))
                SetLookupField(userConnection, entity, schemaName, fieldName, value);
        }

        private void UpdateLookupFieldNoCreate(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string value)
        {
            if (!string.IsNullOrEmpty(value))
                SetLookupFieldNoCreate(userConnection, entity, schemaName, fieldName, value);
        }

        private void SetLookupField(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string value)
        {
            if (string.IsNullOrEmpty(value)) return;

            var lookupId = GetLookupIdByName(userConnection, schemaName, value);
            if (lookupId != Guid.Empty)
                entity.SetColumnValue(fieldName, lookupId);
        }

        private void SetLookupFieldNoCreate(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string value)
        {
            if (string.IsNullOrEmpty(value)) return;

            var lookupId = GetLookupIdByNameOnly(userConnection, schemaName, value);
            if (lookupId != Guid.Empty)
                entity.SetColumnValue(fieldName, lookupId);
        }

        private void UpdateRelatedEntity(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string name)
        {
            if (!string.IsNullOrEmpty(name))
                SetRelatedEntity(userConnection, entity, schemaName, fieldName, name);
        }

        private void SetRelatedEntity(UserConnection userConnection, Entity entity, string schemaName, string fieldName, string name)
        {
            if (string.IsNullOrEmpty(name)) return;

            var relatedId = schemaName == "Account" ? GetOrCreateAccountByName(userConnection, name) 
                                                    : GetOrCreateContactByName(userConnection, name);
            if (relatedId != Guid.Empty)
                entity.SetColumnValue(fieldName, relatedId);
        }

        private DateTime? ParseDateTime(string dateTimeString)
        {
            if (string.IsNullOrEmpty(dateTimeString)) return null;

            try
            {
                if (DateTimeOffset.TryParse(dateTimeString, out DateTimeOffset dateTimeOffset))
                {
                    var localDateTime = dateTimeOffset.DateTime;
                    var offset = dateTimeOffset.Offset;
                    var adjustedDateTime = localDateTime.Subtract(offset);
                    return DateTime.SpecifyKind(adjustedDateTime, DateTimeKind.Utc);
                }
                else
                {
                    var cleanDateTimeString = dateTimeString.TrimEnd('Z');
                    var timezoneIndex = Math.Max(cleanDateTimeString.LastIndexOf('+'), 
                                               cleanDateTimeString.LastIndexOf('-', cleanDateTimeString.Length - 1, 
                                               cleanDateTimeString.Length - 10));
                    
                    if (timezoneIndex > 10)
                        cleanDateTimeString = cleanDateTimeString.Substring(0, timezoneIndex);

                    var result = DateTime.ParseExact(cleanDateTimeString, "yyyy-MM-ddTHH:mm:ss", 
                                                   CultureInfo.InvariantCulture, DateTimeStyles.None);
                    return DateTime.SpecifyKind(result, DateTimeKind.Unspecified);
                }
            }
            catch (Exception ex)
            {
                _logger.Error($"Failed to parse datetime '{dateTimeString}': {ex.Message}");
                return null;
            }
        }

        private Guid GetLookupIdByName(UserConnection userConnection, string schemaName, string lookupValue)
        {
            try
            {
                var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                if (schema == null) return Guid.Empty;

                var esq = new EntitySchemaQuery(schema);
                esq.PrimaryQueryColumn.IsAlwaysSelect = true;
                esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupValue));

                var collection = esq.GetEntityCollection(userConnection);
                return collection.Count > 0 ? collection[0].PrimaryColumnValue : Guid.Empty;
            }
            catch (Exception ex)
            {
                _logger.Error($"Error getting lookup ID for '{lookupValue}' in '{schemaName}': {ex.Message}");
                return Guid.Empty;
            }
        }

        private Guid GetLookupIdByNameOnly(UserConnection userConnection, string schemaName, string lookupValue)
        {
            try
            {
                var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                if (schema == null) return Guid.Empty;

                var esq = new EntitySchemaQuery(schema);
                esq.PrimaryQueryColumn.IsAlwaysSelect = true;
                esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupValue));

                var collection = esq.GetEntityCollection(userConnection);
                return collection.Count > 0 ? collection[0].PrimaryColumnValue : Guid.Empty;
            }
            catch (Exception ex)
            {
                _logger.Error($"Error getting lookup ID for '{lookupValue}' in '{schemaName}': {ex.Message}");
                return Guid.Empty;
            }
        }

        private Guid GetOrCreateEntityByName(UserConnection userConnection, string schemaName, string name)
        {
            try
            {
                var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                if (schema == null) return Guid.Empty;

                var esq = new EntitySchemaQuery(schema);
                esq.PrimaryQueryColumn.IsAlwaysSelect = true;
                esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", name));

                var collection = esq.GetEntityCollection(userConnection);
                if (collection.Count > 0)
                    return collection[0].PrimaryColumnValue;

                // Create new entity
                var entity = schema.CreateEntity(userConnection);
                entity.SetDefColumnValues();
                entity.SetColumnValue("Name", name);
                if (schemaName == "Product") entity.SetColumnValue("Code", name);
                entity.Save();

                return entity.PrimaryColumnValue;
            }
            catch (Exception ex)
            {
                _logger.Error($"Error getting/creating {schemaName} '{name}': {ex.Message}");
                return Guid.Empty;
            }
        }

        private Guid GetOrCreateAccountByName(UserConnection userConnection, string name) => 
            GetOrCreateEntityByName(userConnection, "Account", name);

        private Guid GetOrCreateContactByName(UserConnection userConnection, string name) => 
            GetOrCreateEntityByName(userConnection, "Contact", name);

        private Guid GetOrCreateProductByName(UserConnection userConnection, string name) => 
            GetOrCreateEntityByName(userConnection, "Product", name);

        private void CreateProductDetails(UserConnection userConnection, Guid masterRecordId, List<ProductInfo> products)
        {
            var schema = userConnection.EntitySchemaManager.GetInstanceByName("UsrSampleProduct");
            if (schema == null) return;

            foreach (var product in products)
            {
                if (string.IsNullOrEmpty(product.ProductName)) continue;

                var productId = GetOrCreateProductByName(userConnection, product.ProductName);
                if (productId == Guid.Empty) continue;

                var detail = schema.CreateEntity(userConnection);
                detail.SetDefColumnValues();
                detail.SetColumnValue("UsrSampleManagmentId", masterRecordId);
                detail.SetColumnValue("UsrProductId", productId);
                
                // Set additional product detail fields
                if (product.Quantity.HasValue)
                    detail.SetColumnValue("UsrQuantity", product.Quantity.Value);
                
                if (!string.IsNullOrEmpty(product.UnitOfMeasure))
                    detail.SetColumnValue("UsrUnitOfMeasure", product.UnitOfMeasure);
                
                if (!string.IsNullOrEmpty(product.ProductCode))
                    detail.SetColumnValue("UsrProductCode", product.ProductCode);
                
                if (!string.IsNullOrEmpty(product.Notes))
                    detail.SetColumnValue("UsrNotes", product.Notes);

                if (!string.IsNullOrEmpty(product.ProductType))
                {
                    var productTypeId = GetLookupIdByNameOnly(userConnection, "UsrProductType", product.ProductType);
                    if (productTypeId != Guid.Empty)
                        detail.SetColumnValue("UsrProducttypeId", productTypeId);
                }
                
                detail.Save();
            }
        }

        private void DeleteExistingProductDetails(UserConnection userConnection, Guid masterRecordId)
        {
            var schema = userConnection.EntitySchemaManager.GetInstanceByName("UsrSampleProduct");
            if (schema == null) return;

            var esq = new EntitySchemaQuery(schema);
            esq.PrimaryQueryColumn.IsAlwaysSelect = true;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrSampleManagmentId", masterRecordId));

            var collection = esq.GetEntityCollection(userConnection);
            foreach (Entity detail in collection)
                detail.Delete();
        }
    }

    public class RecordCreationResponse
    {
        public string Message { get; set; }
        public string RecordId { get; set; }
        public string UsrReferenceNumber { get; set; }
        public string Samplecode { get; set; }
    }

    public class ProductInfo
    {
        public string ProductName { get; set; }
        public int? Quantity { get; set; }
        public string UnitOfMeasure { get; set; }
        public string ProductCode { get; set; }
        public string Notes { get; set; }
        public string ProductType { get; set; } 
    }
}