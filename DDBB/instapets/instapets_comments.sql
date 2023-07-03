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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `comment` tinytext NOT NULL,
  `id_user` int unsigned NOT NULL,
  `id_post` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Avisme cuando vuelvas a ir y vamos juntos! Vaya vistas no?',2,4,'2023-04-27 16:07:10',NULL),(2,'¿Qué lindos gatitos durmientes! Yo también necesito mi belleza nocturna para estar en forma. Aunque no lo crean, también sé lo que es una buena siesta. ???',3,13,'2023-04-27 16:38:49',NULL),(3,'Este gorila tiene una presencia imponente... aunque yo prefiero posar más discreta en mis fotos. Tal vez debería pedirle algunos consejos de modelaje. ???',3,9,'2023-04-27 16:39:53',NULL),(4,'Hermano, sales como todo un modelo en esta foto! Tus ojos verdes son tan magnéticos y tu pelaje tan suave... ¡envidio tu sex appeal felino! ???',5,14,'2023-04-27 16:41:00',NULL),(5,'Me encanta cuando dormimos abrazados!! ?',5,13,'2023-04-27 16:41:29',NULL),(6,'Que bien te lo pasas por ahi hermanita! ',5,4,'2023-04-27 16:41:56',NULL),(7,'Wow, ¡esa mariposa realmente te hace lucir más hermosa de lo que ya eres! Aunque debo decir que es difícil no verse hermosa cuando eres una jirafa tan majestuosa. ',4,6,'2023-04-27 16:43:06',NULL),(8,'Hey hermano, ¿qué tal la vida de rey en tu cueva de mantas? No me malinterpretes, ¡me alegra verte tan cómodo! Pero la próxima vez, ¿podrías compartir tu secreto para encontrar el escondite perfecto?',6,12,'2023-04-27 16:44:28',NULL),(9,'Si a eso le llamas alturas.... jajajajaja',2,11,'2023-04-27 16:45:00',NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
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
