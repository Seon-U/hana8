# The proper term is pseudo_replica_mode, but we use this compatibility alias
# to make the statement usable on server versions 8.0.24 and older.
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=1*/;
/*!50003 SET @OLD_COMPLETION_TYPE=@@COMPLETION_TYPE,COMPLETION_TYPE=0*/;
DELIMITER /*!*/;
# at 4
#251210 10:10:13 server id 1  end_log_pos 126 CRC32 0x297b3d17 	Start: binlog v 4, server v 8.0.43 created 251210 10:10:13 at startup
# Warning: this binlog is either in use or was not closed properly.
ROLLBACK/*!*/;
BINLOG '
dcg4aQ8BAAAAegAAAH4AAAABAAQAOC4wLjQzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAB1yDhpEwANAAgAAAAABAAEAAAAYgAEGggAAAAICAgCAAAACgoKKioAEjQA
CigAARc9eyk=
'/*!*/;
# at 126
#251210 10:10:13 server id 1  end_log_pos 157 CRC32 0xd6655257 	Previous-GTIDs
# [empty]
# at 157
#251210 10:14:41 server id 1  end_log_pos 234 CRC32 0x5aa8024f 	Anonymous_GTID	last_committed=0	sequence_number=1	rbr_only=no	original_committed_timestamp=1765329281595246	immediate_commit_timestamp=1765329281595246	transaction_length=224
# original_commit_timestamp=1765329281595246 (2025-12-10 10:14:41.595246 KST)
# immediate_commit_timestamp=1765329281595246 (2025-12-10 10:14:41.595246 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329281595246*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 234
# at 381
#251210 10:16:24 server id 1  end_log_pos 460 CRC32 0x59d21380 	Anonymous_GTID	last_committed=1	sequence_number=2	rbr_only=yes	original_committed_timestamp=1765329384968966	immediate_commit_timestamp=1765329384968966	transaction_length=6100
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
# original_commit_timestamp=1765329384968966 (2025-12-10 10:16:24.968966 KST)
# immediate_commit_timestamp=1765329384968966 (2025-12-10 10:16:24.968966 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329384968966*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 460
#251210 10:16:24 server id 1  end_log_pos 537 CRC32 0x87d64d9a 	Query	thread_id=8	exec_time=0	error_code=0
SET TIMESTAMP=1765329384/*!*/;
SET @@session.pseudo_thread_id=8/*!*/;
SET @@session.foreign_key_checks=1, @@session.sql_auto_is_null=0, @@session.unique_checks=1, @@session.autocommit=1/*!*/;
SET @@session.sql_mode=1168113696/*!*/;
SET @@session.auto_increment_increment=1, @@session.auto_increment_offset=1/*!*/;
/*!\C utf8mb4 *//*!*/;
SET @@session.character_set_client=255,@@session.collation_connection=255,@@session.collation_server=224/*!*/;
SET @@session.lc_time_names=0/*!*/;
SET @@session.collation_database=DEFAULT/*!*/;
/*!80011 SET @@session.default_collation_for_utf8mb4=255*//*!*/;
BEGIN
/*!*/;
# at 537
# at 595
# at 6450
#251210 10:16:24 server id 1  end_log_pos 6481 CRC32 0xd3bdf39a 	Xid = 67
COMMIT/*!*/;
# at 6481
#251210 10:16:53 server id 1  end_log_pos 6560 CRC32 0x38f92d7c 	Anonymous_GTID	last_committed=2	sequence_number=3	rbr_only=no	original_committed_timestamp=1765329413390076	immediate_commit_timestamp=1765329413390076	transaction_length=579
# original_commit_timestamp=1765329413390076 (2025-12-10 10:16:53.390076 KST)
# immediate_commit_timestamp=1765329413390076 (2025-12-10 10:16:53.390076 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329413390076*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 6560
# at 7060
#251210 10:17:44 server id 1  end_log_pos 7139 CRC32 0x5905cb5c 	Anonymous_GTID	last_committed=3	sequence_number=4	rbr_only=no	original_committed_timestamp=1765329464567655	immediate_commit_timestamp=1765329464567655	transaction_length=282
# original_commit_timestamp=1765329464567655 (2025-12-10 10:17:44.567655 KST)
# immediate_commit_timestamp=1765329464567655 (2025-12-10 10:17:44.567655 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329464567655*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 7139
# at 7342
#251210 10:19:39 server id 1  end_log_pos 7421 CRC32 0x6211d8c8 	Anonymous_GTID	last_committed=4	sequence_number=5	rbr_only=no	original_committed_timestamp=1765329579757132	immediate_commit_timestamp=1765329579757132	transaction_length=253
# original_commit_timestamp=1765329579757132 (2025-12-10 10:19:39.757132 KST)
# immediate_commit_timestamp=1765329579757132 (2025-12-10 10:19:39.757132 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329579757132*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 7421
# at 7595
#251210 10:22:35 server id 1  end_log_pos 7674 CRC32 0xc4b4c72d 	Anonymous_GTID	last_committed=5	sequence_number=6	rbr_only=yes	original_committed_timestamp=1765329755052590	immediate_commit_timestamp=1765329755052590	transaction_length=947
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
# original_commit_timestamp=1765329755052590 (2025-12-10 10:22:35.052590 KST)
# immediate_commit_timestamp=1765329755052590 (2025-12-10 10:22:35.052590 KST)
/*!80001 SET @@session.original_commit_timestamp=1765329755052590*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 7674
#251210 10:22:35 server id 1  end_log_pos 7751 CRC32 0xf49d1e40 	Query	thread_id=8	exec_time=0	error_code=0
SET TIMESTAMP=1765329755/*!*/;
BEGIN
/*!*/;
# at 7751
# at 7818
# at 8511
#251210 10:22:35 server id 1  end_log_pos 8542 CRC32 0xe59896ec 	Xid = 94
COMMIT/*!*/;
# at 8542
#251210 10:34:47 server id 1  end_log_pos 8619 CRC32 0xb569fef8 	Anonymous_GTID	last_committed=6	sequence_number=7	rbr_only=no	original_committed_timestamp=1765330487277575	immediate_commit_timestamp=1765330487277575	transaction_length=177
# original_commit_timestamp=1765330487277575 (2025-12-10 10:34:47.277575 KST)
# immediate_commit_timestamp=1765330487277575 (2025-12-10 10:34:47.277575 KST)
/*!80001 SET @@session.original_commit_timestamp=1765330487277575*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 8619
# at 8719
#251210 11:15:35 server id 1  end_log_pos 8796 CRC32 0x72f22f1d 	Anonymous_GTID	last_committed=7	sequence_number=8	rbr_only=no	original_committed_timestamp=1765332935293666	immediate_commit_timestamp=1765332935293666	transaction_length=189
# original_commit_timestamp=1765332935293666 (2025-12-10 11:15:35.293666 KST)
# immediate_commit_timestamp=1765332935293666 (2025-12-10 11:15:35.293666 KST)
/*!80001 SET @@session.original_commit_timestamp=1765332935293666*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
COMMIT /* added by mysqlbinlog *//*!*/;
# at 8796
# at 8908
#251210 15:15:34 server id 1  end_log_pos 8987 CRC32 0x3abb9bd0 	Anonymous_GTID	last_committed=8	sequence_number=9	rbr_only=yes	original_committed_timestamp=1765347334862066	immediate_commit_timestamp=1765347334862066	transaction_length=331
/*!50718 SET TRANSACTION ISOLATION LEVEL READ COMMITTED*//*!*/;
# original_commit_timestamp=1765347334862066 (2025-12-10 15:15:34.862066 KST)
# immediate_commit_timestamp=1765347334862066 (2025-12-10 15:15:34.862066 KST)
/*!80001 SET @@session.original_commit_timestamp=1765347334862066*//*!*/;
/*!80014 SET @@session.original_server_version=80043*//*!*/;
/*!80014 SET @@session.immediate_server_version=80043*//*!*/;
SET @@SESSION.GTID_NEXT= 'ANONYMOUS'/*!*/;
# at 8987
#251210 15:15:34 server id 1  end_log_pos 9075 CRC32 0xdd91cc27 	Query	thread_id=14	exec_time=0	error_code=0
SET TIMESTAMP=1765347334/*!*/;
BEGIN
/*!*/;
# at 9075
# at 9136
# at 9208
#251210 15:15:34 server id 1  end_log_pos 9239 CRC32 0xc3b7bf74 	Xid = 1230
COMMIT/*!*/;
SET @@SESSION.GTID_NEXT= 'AUTOMATIC' /* added by mysqlbinlog */ /*!*/;
DELIMITER ;
# End of log file
/*!50003 SET COMPLETION_TYPE=@OLD_COMPLETION_TYPE*/;
/*!50530 SET @@SESSION.PSEUDO_SLAVE_MODE=0*/;
