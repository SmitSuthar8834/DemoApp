DECLARE @c INT = 0;
SELECT @c = COUNT(*) FROM [SysSettingsValue] WHERE [Id] = '145E60CD-8BAC-40EE-9BDE-C1017BBCD400';
IF (@c = 0)
	BEGIN
		INSERT [dbo].[SysSettingsValue] (
			[Id],
			[SysSettingsId], 
			[SysAdminUnitId],
			[IsDef],
			[GuidValue],
			[Position]
		)
		VALUES 
		(
			'145E60CD-8BAC-40EE-9BDE-C1017BBCD400',
			'E1DB7752-E51F-40D0-8D01-70859B3D7BB3',
			'720B771C-E7A7-4F31-9CFB-52CD21C3739F',
			1,
			'B5D51A2D-C0DD-477B-B2AA-58034367BA26',
			2147483647
		)
	END