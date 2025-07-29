DECLARE
    existsFirstLine NUMBER;
    existsSecondLine NUMBER;
	existsThirdLine NUMBER;

BEGIN
	SELECT COUNT(1) INTO existsFirstLine
	FROM "SysAdminUnit"
	WHERE "Id" = '{B5D51A2D-C0DD-477B-B2AA-58034367BA26}';
	IF existsFirstLine > 0 THEN
		INSERT INTO "SysAdminUnit" ("Id", "Name", "ParentRoleId", "SysAdminUnitTypeValue", "Active", "SysCultureId", "ConnectionType")
		VALUES ('{B5D51A2D-C0DD-477B-B2AA-58034367BA26}', '1st-line support', '{A29A3BA5-4B0D-DE11-9A51-005056C00008}', 1, 1, '{A5420246-0A8E-E111-84A3-00155D054C03}', 0);
	END IF;    

	SELECT COUNT(1) INTO existsSecondLine
	FROM "SysAdminUnit"
	WHERE "Id" = '{BD259924-B19C-4880-8A9C-8363C67D3331}';
	IF existsFirstLine > 0 THEN
		INSERT INTO "SysAdminUnit" ("Id", "Name", "ParentRoleId", "SysAdminUnitTypeValue", "Active", "SysCultureId", "ConnectionType")
		VALUES ('{BD259924-B19C-4880-8A9C-8363C67D3331}', '2nd-line support', '{A29A3BA5-4B0D-DE11-9A51-005056C00008}', 1, 1, '{A5420246-0A8E-E111-84A3-00155D054C03}', 0);
	END IF;    

	SELECT COUNT(1) INTO existsThirdLine
	FROM "SysAdminUnit"
	WHERE "Id" = '{1B45C79D-F7B5-4BFC-ABE4-993F1DCF5C58}';
	IF existsFirstLine > 0 THEN
		INSERT INTO "SysAdminUnit" ("Id", "Name", "ParentRoleId", "SysAdminUnitTypeValue", "Active", "SysCultureId", "ConnectionType")
		VALUES ('{1B45C79D-F7B5-4BFC-ABE4-993F1DCF5C58}', '3rd-line support', '{A29A3BA5-4B0D-DE11-9A51-005056C00008}', 1, 1, '{A5420246-0A8E-E111-84A3-00155D054C03}', 0);
	END IF;    
END;

