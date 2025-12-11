-- MySQL dump 10.13  Distrib 9.3.0, for macos14.7 (arm64)
--
-- Host: 127.0.0.1    Database: testdb
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
-- Table structure for table `Dept`
--

DROP TABLE IF EXISTS `Dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dept` (
  `id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `pid` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '상위부서id',
  `dname` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `captain` int DEFAULT NULL,
  `empcnt` smallint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `captain` (`captain`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dept`
--

LOCK TABLES `Dept` WRITE;
/*!40000 ALTER TABLE `Dept` DISABLE KEYS */;
INSERT INTO `Dept` VALUES (1,0,'영업부',NULL,0),(2,0,'개발부',30,0),(3,1,'영업1팀',78,0),(4,1,'영업2팀',51,0),(5,1,'영업3팀',169,0),(6,2,'서버팀',109,0),(7,2,'클라이언트팀',150,0),(8,6,'인프라셀',NULL,0),(9,6,'DB셀',NULL,0),(10,7,'모바일셀',NULL,0),(11,3,'영엽특공대',NULL,0);
/*!40000 ALTER TABLE `Dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `outdt` date DEFAULT NULL COMMENT '퇴사일',
  `auth` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'guest',
  `remark` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dept` (`dept`),
  KEY `idx_Emp_ename_dept` (`dept`,`ename`),
  CONSTRAINT `emp_ibfk_1` FOREIGN KEY (`dept`) REFERENCES `Dept` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;
INSERT INTO `emp` VALUES (2,'유세혜',4,902,NULL,'guest','{\"id\": 2, \"age\": 30, \"fam\": [{\"id\": 1, \"name\": \"유세차\"}]}'),(3,'원사아',4,100,NULL,'guest','{\"id\": 3, \"age\": 33, \"fam\": [{\"id\": 1, \"name\": \"유세차\"}, {\"id\": 2, \"name\": \"홍길숭\"}]}'),(4,'김태혜',5,700,NULL,'guest','[1, 2, 3]'),(5,'지세국',7,400,NULL,'guest','{\"id\": 5, \"age\": 44, \"fam\": [{\"id\": 1, \"name\": \"지세차\"}, {\"id\": 2, \"name\": \"지세창\"}]}'),(6,'최가국',4,800,NULL,'guest','{\"id\": 6, \"fam\": [{\"id\": 1, \"name\": \"유세홍\"}, {\"id\": 2, \"name\": \"유세이\"}]}'),(7,'배파나',1,800,NULL,'guest',NULL),(8,'원성결',2,200,NULL,'guest',NULL),(9,'전바찬',6,900,NULL,'guest',NULL),(10,'지윤희',5,500,NULL,'guest',NULL),(11,'전차가',1,900,NULL,'guest',NULL),(12,'지호하',3,800,NULL,'guest',NULL),(13,'최종라',5,300,NULL,'guest',NULL),(14,'마마순',1,700,NULL,'guest',NULL),(15,'원자파',7,200,NULL,'guest',NULL),(16,'이결세',7,700,NULL,'guest',NULL),(17,'원호신',2,600,NULL,'guest',NULL),(18,'전국찬',3,903,NULL,'guest',NULL),(19,'방성찬',3,800,NULL,'guest',NULL),(20,'최희결',5,700,NULL,'guest',NULL),(21,'지찬파',2,600,NULL,'guest',NULL),(22,'최파지',4,100,NULL,'guest',NULL),(23,'마다윤',4,300,NULL,'guest',NULL),(24,'이윤파',6,600,NULL,'guest',NULL),(25,'전다윤',3,800,NULL,'guest',NULL),(26,'김나나',1,800,NULL,'guest',NULL),(27,'원호순',7,600,NULL,'guest',NULL),(28,'조국국',7,400,NULL,'guest',NULL),(29,'이윤바',1,300,NULL,'guest',NULL),(30,'김바순',2,800,NULL,'guest',NULL),(31,'방윤윤',6,600,NULL,'guest',NULL),(32,'방호지',4,900,NULL,'guest',NULL),(33,'최마호',1,500,NULL,'guest',NULL),(34,'전아가',3,600,NULL,'guest',NULL),(35,'원성태',6,600,NULL,'guest',NULL),(36,'마다라',3,900,NULL,'guest',NULL),(37,'지라파',3,200,NULL,'guest',NULL),(38,'김자나',3,300,NULL,'guest',NULL),(39,'전가순',2,400,NULL,'guest',NULL),(40,'유호가',6,400,NULL,'guest',NULL),(41,'방사자',6,400,NULL,'guest',NULL),(42,'마윤결',2,700,NULL,'guest',NULL),(43,'마마차',1,800,NULL,'guest',NULL),(44,'이찬가',4,100,NULL,'guest',NULL),(45,'유태파',5,500,NULL,'guest',NULL),(46,'유호다',4,200,NULL,'guest',NULL),(47,'이신희',6,906,NULL,'guest',NULL),(48,'천마라',7,200,NULL,'guest',NULL),(49,'이순아',4,600,NULL,'guest',NULL),(50,'최찬자',7,200,NULL,'guest',NULL),(51,'김바가',4,500,NULL,'guest',NULL),(52,'원가국',6,600,NULL,'guest',NULL),(53,'방가다',7,100,NULL,'guest',NULL),(54,'전순차',6,700,NULL,'guest',NULL),(55,'조종차',5,600,NULL,'guest',NULL),(56,'전호라',3,200,NULL,'guest',NULL),(57,'천호윤',4,500,NULL,'guest',NULL),(58,'마신혜',1,300,NULL,'guest',NULL),(59,'전세국',2,600,NULL,'guest',NULL),(60,'지호태',2,300,NULL,'guest',NULL),(61,'유혜태',4,700,NULL,'guest',NULL),(62,'천세찬',4,800,NULL,'guest',NULL),(63,'지바혜',3,200,NULL,'guest',NULL),(64,'천가차',1,800,NULL,'guest',NULL),(65,'배세사',2,800,NULL,'guest',NULL),(66,'방나하',6,200,NULL,'guest',NULL),(67,'최호태',1,800,NULL,'guest',NULL),(68,'마가혜',3,100,NULL,'guest',NULL),(69,'김성바',6,200,NULL,'guest',NULL),(70,'방혜국',5,600,NULL,'guest',NULL),(71,'이파파',4,300,NULL,'guest',NULL),(72,'지윤혜',7,100,NULL,'guest',NULL),(73,'박찬종',6,600,NULL,'guest',NULL),(74,'방혜윤',3,300,NULL,'guest',NULL),(75,'전호바',1,600,NULL,'guest',NULL),(76,'유희마',1,700,NULL,'guest',NULL),(77,'천성혜',7,500,NULL,'guest',NULL),(78,'김나라',3,800,NULL,'guest',NULL),(79,'최혜성',1,700,NULL,'guest',NULL),(80,'지종라',4,904,NULL,'guest',NULL),(81,'이바희',7,800,NULL,'guest',NULL),(82,'최은가',4,800,NULL,'guest',NULL),(83,'배자호',5,500,NULL,'guest',NULL),(84,'배사파',7,500,NULL,'guest',NULL),(85,'마성다',2,400,NULL,'guest',NULL),(86,'최국세',3,600,NULL,'guest',NULL),(87,'유다지',4,600,NULL,'guest',NULL),(88,'천결신',4,400,NULL,'guest',NULL),(89,'박태사',7,300,NULL,'guest',NULL),(90,'원파가',7,900,NULL,'guest',NULL),(91,'마순차',7,300,NULL,'guest',NULL),(92,'지호희',6,700,NULL,'guest',NULL),(93,'최가국',6,800,NULL,'guest',NULL),(94,'마성나',1,200,NULL,'guest',NULL),(95,'조하마',4,700,NULL,'guest',NULL),(96,'원바가',3,300,NULL,'guest',NULL),(97,'최신세',2,902,NULL,'guest',NULL),(98,'김은다',5,900,NULL,'guest',NULL),(99,'천라국',5,500,NULL,'guest',NULL),(100,'원신국',1,200,NULL,'guest',NULL),(101,'방국윤',5,300,NULL,'guest',NULL),(102,'박세찬',4,600,NULL,'guest',NULL),(103,'최종다',4,500,NULL,'guest',NULL),(104,'이신찬',4,900,NULL,'guest',NULL),(105,'원종마',6,900,NULL,'guest',NULL),(106,'최신호',6,200,NULL,'guest',NULL),(107,'지차찬',3,100,NULL,'guest',NULL),(108,'이나종',1,100,NULL,'guest',NULL),(109,'김결나',6,500,NULL,'guest',NULL),(110,'조파호',3,600,NULL,'guest',NULL),(111,'유신찬',5,200,NULL,'guest',NULL),(112,'원세태',1,200,NULL,'guest',NULL),(113,'방호혜',5,800,NULL,'guest',NULL),(114,'유마자',7,200,NULL,'guest',NULL),(115,'최순신',2,900,NULL,'guest',NULL),(116,'조윤혜',7,100,NULL,'guest',NULL),(117,'조호호',3,400,NULL,'guest',NULL),(118,'마세사',3,900,NULL,'guest',NULL),(119,'방결희',1,600,NULL,'guest',NULL),(120,'지국혜',1,300,NULL,'guest',NULL),(121,'박세결',3,100,NULL,'guest',NULL),(122,'조지혜',4,800,NULL,'guest',NULL),(123,'방은희',7,800,NULL,'guest',NULL),(124,'이성가',7,900,NULL,'guest',NULL),(125,'원지신',5,300,NULL,'guest',NULL),(126,'천윤아',3,600,NULL,'guest',NULL),(127,'원순지',1,400,NULL,'guest',NULL),(128,'이윤바',7,907,NULL,'guest',NULL),(129,'김신호',6,300,NULL,'guest',NULL),(130,'원혜호',2,600,NULL,'guest',NULL),(131,'천윤사',2,800,NULL,'guest',NULL),(132,'천희가',3,600,NULL,'guest',NULL),(133,'원결바',5,905,NULL,'guest',NULL),(134,'마성호',4,100,NULL,'guest',NULL),(135,'이성다',3,800,NULL,'guest',NULL),(136,'조사자',5,800,NULL,'guest',NULL),(137,'천찬혜',3,400,NULL,'guest',NULL),(138,'전지사',6,900,NULL,'guest',NULL),(139,'방자세',2,800,NULL,'guest',NULL),(140,'지아마',7,700,NULL,'guest',NULL),(141,'김찬마',2,500,NULL,'guest',NULL),(142,'방가사',7,500,NULL,'guest',NULL),(143,'배아순',7,400,NULL,'guest',NULL),(144,'최호희',6,200,NULL,'guest',NULL),(145,'최혜혜',4,400,NULL,'guest',NULL),(146,'유태차',3,200,NULL,'guest',NULL),(147,'원국은',1,700,NULL,'guest',NULL),(148,'조혜은',7,400,NULL,'guest',NULL),(149,'조가마',2,200,NULL,'guest',NULL),(150,'김찬라',7,300,NULL,'guest',NULL),(151,'최신세',2,900,NULL,'guest',NULL),(152,'박성종',1,901,NULL,'guest',NULL),(153,'지나국',6,600,NULL,'guest',NULL),(154,'마파결',1,500,NULL,'guest',NULL),(155,'조태국',5,200,NULL,'guest',NULL),(156,'방나차',3,600,NULL,'guest',NULL),(157,'김지희',3,500,NULL,'guest',NULL),(158,'유나순',5,100,NULL,'guest',NULL),(159,'조윤호',6,100,NULL,'guest',NULL),(160,'배다결',7,200,NULL,'guest',NULL),(161,'배희호',1,500,NULL,'guest',NULL),(162,'방호성',4,400,NULL,'guest',NULL),(163,'김세은',3,900,NULL,'guest',NULL),(164,'최성라',4,800,NULL,'guest',NULL),(165,'마신신',1,200,NULL,'guest',NULL),(166,'유윤사',2,800,NULL,'guest',NULL),(167,'전파자',3,200,NULL,'guest',NULL),(168,'박국다',3,300,NULL,'guest',NULL),(169,'김다바',5,200,NULL,'guest',NULL),(170,'원호신',6,700,NULL,'guest',NULL),(171,'김호파',5,500,NULL,'guest',NULL),(172,'방나자',2,900,NULL,'guest',NULL),(173,'박세자',4,300,NULL,'guest',NULL),(174,'원결바',4,500,NULL,'guest',NULL),(175,'김태신',5,300,NULL,'guest',NULL),(176,'최신신',2,700,NULL,'guest',NULL),(177,'배가하',5,300,NULL,'guest',NULL),(178,'지나다',2,200,NULL,'guest',NULL),(179,'박사파',7,500,NULL,'guest',NULL),(180,'천신아',4,300,NULL,'guest',NULL),(181,'이가세',1,900,NULL,'guest',NULL),(182,'방신다',4,100,NULL,'guest',NULL),(183,'방태가',6,700,NULL,'guest',NULL),(184,'박하아',7,500,NULL,'guest',NULL),(185,'천성가',7,700,NULL,'guest',NULL),(186,'이호라',3,400,NULL,'guest',NULL),(187,'천다종',1,600,NULL,'guest',NULL),(188,'이하결',7,700,NULL,'guest',NULL),(189,'이은호',7,400,NULL,'guest',NULL),(190,'이성다',3,800,NULL,'guest',NULL),(191,'이신신',1,200,NULL,'guest',NULL),(192,'마세가',2,100,NULL,'guest',NULL),(193,'원세순',7,700,NULL,'guest',NULL),(194,'원윤가',1,600,NULL,'guest',NULL),(195,'김세윤',6,900,NULL,'guest',NULL),(196,'최찬라',1,600,NULL,'guest',NULL),(197,'유호윤',7,400,NULL,'guest',NULL),(198,'박차호',5,700,NULL,'guest',NULL),(199,'마바순',2,800,NULL,'guest',NULL),(200,'방국가',1,200,NULL,'guest',NULL),(201,'최세마',1,300,NULL,'guest',NULL),(202,'조라종',6,500,NULL,'guest',NULL),(203,'이지마',4,700,NULL,'guest',NULL),(204,'김신호',6,300,NULL,'guest',NULL),(205,'김은다',6,200,NULL,'guest',NULL),(206,'마세혜',7,700,NULL,'guest',NULL),(207,'김하세',1,200,NULL,'guest',NULL),(208,'원순세',5,400,NULL,'guest',NULL),(209,'원마종',6,600,NULL,'guest',NULL),(210,'마사혜',2,200,NULL,'guest',NULL),(211,'박나신',5,300,NULL,'guest',NULL),(212,'전호사',6,100,NULL,'guest',NULL),(213,'지지호',2,400,NULL,'guest',NULL),(214,'천혜파',2,900,NULL,'guest',NULL),(215,'지사세',6,700,NULL,'guest',NULL),(216,'방나태',6,100,NULL,'guest',NULL),(217,'김지하',6,400,NULL,'guest',NULL),(218,'지찬태',3,300,NULL,'guest',NULL),(219,'조사나',4,800,NULL,'guest',NULL),(220,'지차순',6,800,NULL,'guest',NULL),(221,'지희태',3,300,NULL,'guest',NULL),(222,'이희나',5,800,NULL,'guest',NULL),(223,'배신마',7,900,NULL,'guest',NULL),(224,'배나희',3,900,NULL,'guest',NULL),(225,'마아세',4,800,NULL,'guest',NULL),(226,'전바신',2,900,NULL,'guest',NULL),(227,'박희윤',1,200,NULL,'guest',NULL),(228,'천결호',1,100,NULL,'guest',NULL),(229,'마사혜',2,200,NULL,'guest',NULL),(230,'최종바',6,300,NULL,'guest',NULL),(231,'원파가',1,200,NULL,'guest',NULL),(232,'지희결',5,200,NULL,'guest',NULL),(233,'김자마',6,200,NULL,'guest',NULL),(234,'방성세',1,900,NULL,'guest',NULL),(235,'마바성',6,600,NULL,'guest',NULL),(236,'천마마',2,200,NULL,'guest',NULL),(237,'최가세',6,100,NULL,'guest',NULL),(238,'김파희',3,200,NULL,'guest',NULL),(239,'마찬아',5,900,NULL,'guest',NULL),(240,'김세가',1,200,NULL,'guest',NULL),(241,'전차나',2,700,NULL,'guest',NULL),(242,'유희국',2,100,NULL,'guest',NULL),(243,'전희마',1,800,NULL,'guest',NULL),(244,'마호차',3,200,NULL,'guest',NULL),(245,'배태바',5,600,NULL,'guest',NULL),(246,'배나희',4,300,NULL,'guest',NULL),(247,'유은종',6,300,NULL,'guest',NULL),(248,'원세마',6,300,NULL,'guest',NULL),(249,'배마가',4,100,NULL,'guest',NULL),(250,'유결호',1,700,NULL,'guest',NULL),(251,'지태윤',4,100,NULL,'guest',NULL),(252,'배호가',7,600,NULL,'guest',NULL);
/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_emp_after_insert` BEFORE INSERT ON `emp` FOR EACH ROW update Dept set empcnt = empcnt + 1
    where id = New.dept */;;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_emp_after_delete` BEFORE DELETE ON `emp` FOR EACH ROW update Dept set empcnt = empcnt - 1
    where id = OLD.dept */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Notice`
--

DROP TABLE IF EXISTS `Notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notice` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '작성일',
  `workdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '제목',
  `writer` int unsigned DEFAULT NULL COMMENT '작성자',
  `contents` text COLLATE utf8mb4_unicode_ci COMMENT '내용',
  PRIMARY KEY (`id`),
  KEY `fk_Notice_writer` (`writer`),
  FULLTEXT KEY `ft_idx_Notice_title_contents` (`title`,`contents`),
  CONSTRAINT `fk_Notice_writer` FOREIGN KEY (`writer`) REFERENCES `Emp` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notice`
--

LOCK TABLES `Notice` WRITE;
/*!40000 ALTER TABLE `Notice` DISABLE KEYS */;
INSERT INTO `Notice` VALUES (1,'2025-12-10 01:22:35','2025-12-10 01:22:35','세종대왕',NULL,'조선의 제4대 국왕이다.'),(2,'2025-12-10 01:22:35','2025-12-10 01:22:35','단군',NULL,'단군왕검(檀君王儉)은 한민족의 시조이자 고조선(古朝鮮)의 국조(國祖), 대종교의 시작.'),(3,'2025-12-10 01:22:35','2025-12-10 01:22:35','정약용',NULL,'조선 후기의 문신이자 실학자·저술가·시인·철학자·과학자·공학자이다.'),(4,'2025-12-10 01:22:35','2025-12-10 01:22:35','계백',NULL,'백제 말기의 군인이다.'),(5,'2025-12-10 01:22:35','2025-12-10 01:22:35','이순신',NULL,'조선 중기의 무신이었다. 본관은 덕수(德水), 자는 여해(汝諧), 시호는 충무(忠武).'),(6,'2025-12-10 01:22:35','2025-12-10 01:22:35','김유신',NULL,'신라의 화랑의 우두머리였으며 태대각간(太大角干)이었고 신라에 귀순한 가야 왕족의 후손.');
/*!40000 ALTER TABLE `Notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StopWord`
--

DROP TABLE IF EXISTS `StopWord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StopWord` (
  `value` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StopWord`
--

LOCK TABLES `StopWord` WRITE;
/*!40000 ALTER TABLE `StopWord` DISABLE KEYS */;
INSERT INTO `StopWord` VALUES ('가까스로'),('가령'),('각각'),('각자'),('각종'),('갖고말하자면'),('같다'),('같이'),('개의치않고'),('거니와'),('거바'),('거의'),('것과'),('것들'),('게다가'),('게우다'),('겨우'),('견지에서'),('이르다'),('있다'),('겸사겸사'),('고려하면'),('고로'),('공동으로'),('과연'),('관계없이'),('관련이'),('관하여'),('관한'),('관해서는'),('구체적으로'),('구토하다'),('그들'),('그때'),('그래'),('그래도'),('그래서'),('그러나'),('그러니'),('그러니까'),('그러면'),('그러므로'),('그러한즉'),('그런'),('까닭에'),('그런데'),('그런즉'),('그럼'),('그럼에도불구하고'),('그렇게'),('함으로써'),('그렇지'),('않다면'),('않으면'),('그렇지만'),('그렇지않으면'),('그리고'),('그리하여'),('그만이다'),('그에'),('따르는'),('그위에'),('그저'),('그중에서'),('그치지'),('않다'),('근거로'),('근거하여'),('기대여'),('기점으로'),('기준으로'),('기타'),('까닭으로'),('까악'),('까지'),('미치다'),('까지도'),('꽈당'),('끙끙'),('끼익'),('나머지는'),('남들'),('남짓'),('너희'),('너희들'),('논하지'),('놀라다'),('누가'),('알겠는가'),('누구'),('다른'),('방면으로'),('다만'),('다섯'),('다소'),('다수'),('다시'),('말하자면'),('다시말하면'),('다음'),('다음에'),('다음으로'),('단지'),('답다'),('당신'),('당장'),('대로'),('하다'),('대하면'),('대하여'),('대해'),('대해서'),('댕그'),('더구나'),('더군다나'),('더라도'),('더불어'),('더욱더'),('더욱이는'),('도달하다'),('도착하다'),('동시에'),('동안'),('된바에야'),('된이상'),('두번째로'),('둥둥'),('뒤따라'),('뒤이어'),('든간에'),('등등'),('딩동'),('따라'),('따라서'),('따위'),('따지지'),('때가'),('되어'),('때문에'),('또한'),('뚝뚝'),('해도'),('인하여'),('로부터'),('로써'),('마음대로'),('마저'),('마저도'),('마치'),('막론하고'),('못하다'),('만약'),('만약에'),('만은'),('아니다'),('만이'),('만일'),('만큼'),('말할것도'),('없고'),('매번'),('메쓰겁다'),('모두'),('무렵'),('무릎쓰고'),('무슨'),('무엇'),('무엇때문에'),('물론'),('바꾸어말하면'),('바꾸어말하자면'),('바꾸어서'),('말하면'),('한다면'),('바꿔'),('바로'),('바와같이'),('밖에'),('안된다'),('반대로'),('반드시'),('버금'),('보는데서'),('보다더'),('보드득'),('본대로'),('봐라'),('부류의'),('사람들'),('부터'),('불구하고'),('불문하고'),('붕붕'),('비걱거리다'),('비교적'),('비길수'),('없다'),('비로소'),('비록'),('비슷하다'),('비추어'),('보아'),('비하면'),('뿐만'),('아니라'),('뿐만아니라'),('뿐이다'),('삐걱'),('삐걱거리다'),('상대적으로'),('생각한대로'),('설령'),('설마'),('설사'),('소생'),('소인'),('습니까'),('습니다'),('시각'),('시간'),('시작하여'),('시초에'),('시키다'),('실로'),('심지어'),('아니'),('아니나다를가'),('아니라면'),('아니면'),('아니었다면'),('아래윗'),('아무거나'),('아무도'),('아야'),('아울러'),('아이'),('아이고'),('아이구'),('아이야'),('아이쿠'),('아하'),('아홉'),('않기'),('위하여'),('위해서'),('알았어'),('앞에서'),('앞의것'),('약간'),('양자'),('어기여차'),('어느'),('년도'),('어느것'),('어느곳'),('어느때'),('어느쪽'),('어느해'),('어디'),('어때'),('어떠한'),('어떤'),('어떤것'),('어떤것들'),('어떻게'),('어떻해'),('어이'),('어째서'),('어쨋든'),('어쩔수'),('어찌'),('어찌됏든'),('어찌됏어'),('어찌하든지'),('어찌하여'),('언제'),('언젠가'),('얼마'),('되는'),('얼마간'),('얼마나'),('얼마든지'),('얼마만큼'),('얼마큼'),('엉엉'),('가서'),('달려'),('한하다'),('에게'),('에서'),('여기'),('여덟'),('여러분'),('여보시오'),('여부'),('여섯'),('여전히'),('여차'),('연관되다'),('연이서'),('영차'),('옆사람'),('예를'),('들면'),('들자면'),('예컨대'),('예하면'),('오로지'),('오르다'),('오자마자'),('오직'),('오호'),('오히려'),('같은'),('와르르'),('와아'),('왜냐하면'),('외에도'),('요만큼'),('요만한'),('요만한걸'),('요컨대'),('우르르'),('우리'),('우리들'),('우선'),('우에'),('종합한것과같이'),('운운'),('위에서'),('서술한바와같이'),('윙윙'),('으로'),('으로서'),('으로써'),('응당'),('의거하여'),('의지하여'),('의해'),('의해되다'),('의해서'),('되다'),('외에'),('정도의'),('이것'),('이곳'),('이때'),('이라면'),('이래'),('이러이러하다'),('이러한'),('이런'),('이럴정도로'),('이렇게'),('많은'),('이렇게되면'),('이렇게말하자면'),('이렇구나'),('이로'),('이르기까지'),('이리하여'),('이만큼'),('이번'),('이봐'),('이상'),('이어서'),('이었다'),('이와'),('이와같다면'),('이외에도'),('이용하여'),('이유만으로'),('이젠'),('이지만'),('이쪽'),('이천구'),('이천육'),('이천칠'),('이천팔'),('듯하다'),('인젠'),('일것이다'),('일곱'),('일단'),('일때'),('일반적으로'),('일지라도'),('임에'),('틀림없다'),('입각하여'),('입장에서'),('잇따라'),('자기'),('자기집'),('자마자'),('자신'),('잠깐'),('잠시'),('저것'),('저것만큼'),('저기'),('저쪽'),('저희'),('전부'),('전자'),('전후'),('점에서'),('정도에'),('제각기'),('제외하고'),('조금'),('조차'),('조차도'),('졸졸'),('좋아'),('좍좍'),('주룩주룩'),('주저하지'),('않고'),('줄은'),('몰랏다'),('줄은모른다'),('중에서'),('중의하나'),('즈음하여'),('즉시'),('지든지'),('지만'),('지말고'),('진짜로'),('쪽으로'),('차라리'),('참나'),('첫번째로'),('총적으로'),('보면'),('콸콸'),('쾅쾅'),('타다'),('타인'),('탕탕'),('토하다'),('통하여'),('틈타'),('펄렁'),('하게될것이다'),('하게하다'),('하겠는가'),('하고'),('하고있었다'),('하곤하였다'),('하구나'),('하기'),('하기는한데'),('하기만'),('하면'),('하기보다는'),('하기에'),('하나'),('하느니'),('하는'),('김에'),('편이'),('낫다'),('하는것도'),('하는것만'),('하는것이'),('하는바'),('하더라도'),('하도다'),('하도록시키다'),('하도록하다'),('하든지'),('하려고하다'),('하마터면'),('할수록'),('하면된다'),('하면서'),('하물며'),('하여금'),('하여야'),('하자마자'),('하지'),('않는다면'),('않도록'),('하지마'),('하지마라'),('하지만'),('하하'),('이유는'),('몰라도'),('한데'),('한마디'),('한적이있다'),('한켠으로는'),('한항목'),('따름이다'),('생각이다'),('안다'),('지경이다'),('힘이'),('할때'),('할만하다'),('할망정'),('할뿐'),('할수있다'),('할수있어'),('할줄알다'),('할지라도'),('할지언정'),('함께'),('해도된다'),('해도좋다'),('해봐요'),('해서는'),('해야한다'),('해요'),('했어요'),('향하다'),('향하여'),('향해서'),('허걱'),('허허'),('헉헉'),('헐떡헐떡'),('형식으로'),('쓰여'),('혹시'),('혹은'),('혼자'),('훨씬'),('휘익'),('흐흐'),('힘입어');
/*!40000 ALTER TABLE `StopWord` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TestEmp`
--

DROP TABLE IF EXISTS `TestEmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TestEmp` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `outdt` date DEFAULT NULL COMMENT '퇴사일',
  `auth` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'guest',
  `remark` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dept` (`dept`),
  KEY `idx_Emp_ename_dept` (`dept`,`ename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TestEmp`
--

LOCK TABLES `TestEmp` WRITE;
/*!40000 ALTER TABLE `TestEmp` DISABLE KEYS */;
/*!40000 ALTER TABLE `TestEmp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_deptcaptain`
--

DROP TABLE IF EXISTS `v_deptcaptain`;
/*!50001 DROP VIEW IF EXISTS `v_deptcaptain`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_deptcaptain` AS SELECT 
 1 AS `id`,
 1 AS `pid`,
 1 AS `dname`,
 1 AS `captain`,
 1 AS `ename`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'testdb'
--
