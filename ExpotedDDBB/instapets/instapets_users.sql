-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: instapets
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `kind` varchar(50) NOT NULL,
  `breed` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `about_me` text,
  `avatar` varchar(100) DEFAULT 'default.jpg',
  `role` enum('user','admin','god') DEFAULT 'user',
  `reg_code` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'AvadaKedavra','Perro','Mestizo','avadakedavra@photopets.wouf','$2b$10$KeiIYPt2VoHDlFRSo0ON.uYAfnfEvoiemLMQatEA15s8EXDbYccTq','Me da miedo la vida!','bcd789f6-6367-4131-b0e7-44106298c152.jpg','user',NULL,1,'2023-04-27 15:15:04','2023-04-27 14:01:04'),(2,'JirafaAlta','Mamífero','Jirafa','jirafaalta@photopets.wouf','$2b$10$iDSQTF.0ClsK9CKstTp2mOCRBci37d0KXqDcZRU8uKEdU9DkkEjCS','Soy una jirafa muy alta y elegante.','043cf4db-748a-4012-bdd0-b4444b9d3a23.jpg','user',NULL,1,'2023-04-27 15:16:17','2023-04-27 14:06:23'),(3,'SerpienteSeductora','Reptil','Serpiente','serpienteseductora@photopets.wouf','$2b$10$MyV6sYfu/5q71IrsdY4By.5gMydzeq0sY/Er.W6qkeivSurAfk/gW','Soy una seductora del reino animal. ?','b182182a-cea3-4e7e-9803-5d6ea5ea1262.jpg','user',NULL,1,'2023-04-27 15:16:59','2023-04-27 14:37:05'),(4,'GorilaMusculoso','Primate','Gorila','gorilamusculoso@photopets.wouf','$2b$10$NVD76vO7LKbP1bO84VRMCu/TQ2q4axUL9xHvKfZaLzGO3gb3/Lg7O','Soy el gorila más musculoso de la selva ??','1eebaac2-5aef-4748-8f8f-7ef548483779.jpg','user',NULL,1,'2023-04-27 15:18:20','2023-04-27 14:21:32'),(5,'GatitoSilver','Felino','Gato','gatitosilver@photopets.wouf','$2b$10$zeBVGExQW1tzGXZlohF80Oy75wfrn4N/rlzeZGp23IZF8a8wav7eq','Bola de pelo aventurera ?','7325bd5d-896b-4789-9a03-eccf4bb9ea5c.jpg','user',NULL,1,'2023-04-27 15:20:11','2023-04-27 14:27:30'),(6,'ReySimbaMiau','Felino','Gato','reysimba@photopets.wouf','$2b$10$PSRWVW5i3iUdztPDJXd01e7q/EQ1i4tPKeuzoddD126xyPWkKYdDi','Soy un gato rebelde que roba el corazón de todos?','c8486def-1c86-4622-842b-ffa1504f25b1.jpg','user',NULL,1,'2023-04-27 16:31:04','2023-04-27 14:35:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 16:52:18
