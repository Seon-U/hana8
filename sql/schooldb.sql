-- MySQL dump 10.13  Distrib 9.3.0, for macos14.7 (arm64)
--
-- Host: 127.0.0.1    Database: schooldb
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enroll`
--

DROP TABLE IF EXISTS `enroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enroll` (
  `id` int DEFAULT NULL,
  `subject` int DEFAULT NULL,
  `student` int DEFAULT NULL,
  `enrolled_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `fk_student` (`student`),
  KEY `fk_subject` (`subject`),
  CONSTRAINT `fk_student` FOREIGN KEY (`student`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subject` FOREIGN KEY (`subject`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enroll`
--

LOCK TABLES `enroll` WRITE;
/*!40000 ALTER TABLE `enroll` DISABLE KEYS */;
INSERT INTO `enroll` VALUES (NULL,21,1,'2025-12-05 02:05:05'),(NULL,20,1,'2025-12-05 02:05:05'),(NULL,19,1,'2025-12-05 02:05:05'),(NULL,18,1,'2025-12-05 02:05:05'),(NULL,17,1,'2025-12-05 02:05:05'),(NULL,16,1,'2025-12-05 02:05:05'),(NULL,15,1,'2025-12-05 02:05:05'),(NULL,14,1,'2025-12-05 02:05:05'),(NULL,13,1,'2025-12-05 02:05:05'),(NULL,12,1,'2025-12-05 02:05:05'),(NULL,6,2,'2025-12-05 02:25:50'),(NULL,8,10,'2025-12-05 02:25:50'),(NULL,1,15,'2025-12-05 02:25:50'),(NULL,2,5,'2025-12-05 02:25:50'),(NULL,17,6,'2025-12-05 02:25:50'),(NULL,12,20,'2025-12-05 02:25:50'),(NULL,21,17,'2025-12-05 02:25:50'),(NULL,6,16,'2025-12-05 02:25:50'),(NULL,17,4,'2025-12-05 02:25:50'),(NULL,18,13,'2025-12-05 02:25:50'),(NULL,19,22,'2025-12-05 02:25:50'),(NULL,14,14,'2025-12-05 02:25:50'),(NULL,20,3,'2025-12-05 02:25:50'),(NULL,16,12,'2025-12-05 02:25:50'),(NULL,1,8,'2025-12-05 02:25:50'),(NULL,2,19,'2025-12-05 02:25:50'),(NULL,10,18,'2025-12-05 02:25:50'),(NULL,11,1,'2025-12-05 02:25:50'),(NULL,1,21,'2025-12-05 02:25:50'),(NULL,2,9,'2025-12-05 02:25:50'),(NULL,16,7,'2025-12-05 02:25:50'),(NULL,5,11,'2025-12-05 02:25:50');
/*!40000 ALTER TABLE `enroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major`
--

DROP TABLE IF EXISTS `major`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `major` (
  `major_id` int NOT NULL AUTO_INCREMENT,
  `updatedata` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `major_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`major_id`),
  UNIQUE KEY `name` (`major_name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major`
--

LOCK TABLES `major` WRITE;
/*!40000 ALTER TABLE `major` DISABLE KEYS */;
INSERT INTO `major` VALUES (1,'2025-12-05 00:44:35','경영학과','공학관','2025-12-05 00:35:47','2025-12-05 00:44:35'),(2,'2025-12-05 00:49:51','국어국문학과','공학관','2025-12-05 00:36:00','2025-12-05 00:49:51'),(3,'2025-12-05 00:44:35','건축공학과','공학관','2025-12-05 00:37:08','2025-12-05 00:44:35'),(4,'2025-12-05 01:08:05','경제학과','경영관','2025-12-05 01:08:05','2025-12-05 01:08:05');
/*!40000 ALTER TABLE `major` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prof`
--

DROP TABLE IF EXISTS `Prof`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Prof` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `likecnt` int DEFAULT '0',
  `subjectcnt` tinyint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prof`
--

LOCK TABLES `Prof` WRITE;
/*!40000 ALTER TABLE `Prof` DISABLE KEYS */;
INSERT INTO `Prof` VALUES (1,'방국가',200,1),(2,'최세마',201,2),(3,'조라종',202,2),(4,'이지마',203,1),(5,'김신호',204,0),(6,'김은다',205,1),(7,'마세혜',206,1),(8,'김하세',207,1),(9,'원순세',208,0),(10,'원마종',209,1),(11,'마사혜',210,1),(12,'박나신',211,1),(13,'전호사',212,1),(14,'지지호',213,1),(15,'천혜파',214,1),(16,'지사세',215,1),(17,'방나태',216,1),(18,'김지하',217,1),(19,'지찬태',218,1),(20,'조사나',219,1),(21,'지차순',220,1),(32,'김교수',0,0),(33,'이교수',0,0);
/*!40000 ALTER TABLE `Prof` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdt` date NOT NULL,
  `major` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`),
  KEY `functional_index` ((substr(`mobile`,-(4))))
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES (1,'지윤희','2000-12-10','2','stu10@gmail.com','01012341010',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(2,'전차가','2000-12-11','2','stu11@gmail.com','01012341011',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(3,'지호하','2000-12-12','4','stu12@gmail.com','01012341012',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(4,'최종라','2000-12-13','2','stu13@gmail.com','01012341013',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(5,'마마순','2005-09-09','2','stu14@gmail.com','01012341014',0,'2025-12-05 01:23:40','2025-12-08 06:07:23'),(6,'원자파','2005-09-09','4','stu15@gmail.com','01012341015',1,'2025-12-05 01:23:40','2025-12-08 06:09:17'),(7,'이결세','2000-12-16','4','stu16@gmail.com','01012341016',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(8,'원호신','2000-12-17','3','stu17@gmail.com','01012341017',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(9,'전국찬','2000-12-18','4','stu18@gmail.com','01012341018',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(10,'방성찬','2000-12-19','4','stu19@gmail.com','01012341019',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(11,'최희결','2000-12-20','2','stu20@gmail.com','01012341020',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(12,'지찬파','2000-12-21','3','stu21@gmail.com','01012341021',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(13,'최파지','2000-12-22','1','stu22@gmail.com','01012341022',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(14,'마다윤','2000-12-23','1','stu23@gmail.com','01012341023',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(15,'이윤파','2000-12-24','3','stu24@gmail.com','01012341024',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(16,'전다윤','2000-12-25','4','stu25@gmail.com','01012341025',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(17,'김나나','2000-12-26','2','stu26@gmail.com','01012341026',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(18,'원호순','2000-12-27','4','stu27@gmail.com','01012341027',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(19,'조국국','2000-12-28','4','stu28@gmail.com','01012341028',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(20,'이윤바','2000-12-29','2','stu29@gmail.com','01012341029',1,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(21,'김바순','2000-12-30','3','stu30@gmail.com','01012341030',0,'2025-12-05 01:23:40','2025-12-05 01:23:40'),(22,'방윤윤','2000-12-31','3','stu31@gmail.com','01012341031',1,'2025-12-05 01:23:40','2025-12-05 01:23:40');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subject`
--

DROP TABLE IF EXISTS `Subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(31) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prof` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prof` (`prof`),
  CONSTRAINT `fk_prof` FOREIGN KEY (`prof`) REFERENCES `Prof` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subject`
--

LOCK TABLES `Subject` WRITE;
/*!40000 ALTER TABLE `Subject` DISABLE KEYS */;
INSERT INTO `Subject` VALUES (1,'방국가의 싱글벙글 교양강의',1),(2,'최세마의 싱글벙글 교양강의',2),(3,'조라종의 싱글벙글 교양강의',NULL),(4,'이지마의 싱글벙글 교양강의',4),(5,'과목5to2',2),(6,'김은다의 싱글벙글 교양강의',6),(7,'마세혜의 싱글벙글 교양강의',7),(8,'김하세의 싱글벙글 교양강의',8),(10,'원마종의 싱글벙글 교양강의',10),(11,'마사혜의 싱글벙글 교양강의',11),(12,'박나신의 싱글벙글 교양강의',12),(13,'전호사의 싱글벙글 교양강의',13),(14,'지지호의 싱글벙글 교양강의',14),(15,'천혜파의 싱글벙글 교양강의',15),(16,'지사세의 싱글벙글 교양강의',16),(17,'방나태의 싱글벙글 교양강의',17),(18,'김지하의 싱글벙글 교양강의',18),(19,'지찬태의 싱글벙글 교양강의',19),(20,'조사나의 싱글벙글 교양강의',20),(21,'지차순의 싱글벙글 교양강의',21),(33,'과목7',3),(34,'과목8',3);
/*!40000 ALTER TABLE `Subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_Subject_after_insert` AFTER INSERT ON `subject` FOR EACH ROW begin 
    update Prof set subjectcnt = subjectcnt + 1
    where id = NEW.prof;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_Subject_after_update` AFTER UPDATE ON `subject` FOR EACH ROW begin 
    if NEW.prof <> OLD.prof THEN 
        update Prof set subjectcnt = subjectcnt + 1
            where id = NEW.prof;
            
        update Prof set subjectcnt = subjectcnt - 1
            where id = OLD.prof;
    END IF;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_Subject_after_delete` AFTER DELETE ON `subject` FOR EACH ROW begin 
    update Prof set subjectcnt = subjectcnt - 1
    where id = OLD.prof;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `v_subject`
--

DROP TABLE IF EXISTS `v_subject`;
/*!50001 DROP VIEW IF EXISTS `v_subject`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_subject` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `prof`,
 1 AS `prof_name`,
 1 AS `likecnt`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'schooldb'
--
