SELECT * FROM gm_function_switch WHERE serverId IN ("public", "1001");

-- 1	public	0	0	0	0	1	0	0	1
-- 2	1001	1	0	1	1	1	1	1	1

SELECT * FROM gm_function_switch WHERE serverId IN ("public", "public");
-- 1	public	0	0	0	0	1	0	0	1