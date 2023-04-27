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

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `value` tinyint(1) DEFAULT '0',
  `id_user` int unsigned NOT NULL,
  `id_post` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,1,2,4,'2023-04-27 16:06:45',NULL),(2,1,2,1,'2023-04-27 16:07:30',NULL),(3,1,3,14,'2023-04-27 16:38:16',NULL),(4,1,3,9,'2023-04-27 16:39:54',NULL),(5,1,3,6,'2023-04-27 16:40:04',NULL),(6,1,5,14,'2023-04-27 16:40:33',NULL),(7,1,4,6,'2023-04-27 16:42:26',NULL),(8,1,4,7,'2023-04-27 16:42:28',NULL),(9,1,4,14,'2023-04-27 16:42:35',NULL),(10,1,4,5,'2023-04-27 16:43:13',NULL),(11,1,4,1,'2023-04-27 16:43:17',NULL),(12,1,6,4,'2023-04-27 16:43:44',NULL),(13,1,6,3,'2023-04-27 16:43:48',NULL),(14,1,6,10,'2023-04-27 16:43:52',NULL),(15,1,6,12,'2023-04-27 16:43:55',NULL),(16,1,2,11,'2023-04-27 16:44:51',NULL);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` text,
  `image` varchar(100) DEFAULT NULL,
  `id_user` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'En el monte, disfrutando de las vistas!','cf43eaa5-5ce6-4464-b11c-aae0d54245d5.jpg',1,'2023-04-27 15:25:59',NULL),(3,'Con mi hermanito Gus en la cama. #BuenasNoches','50edf75d-e6a7-422b-b25a-537952335a19.jpg',1,'2023-04-27 15:57:38',NULL),(4,'Despues de correr un buen rato toca descansar. #Naturaleza #Paseitos','d8ca9328-89d7-4f55-8217-a9fe4fb6c823.jpg',1,'2023-04-27 15:58:24',NULL),(5,'Tomando el sol con mi familia. #Naturaleza ','b0d92402-fb21-48e7-9b78-7ba6b4367cea.jpg',2,'2023-04-27 16:05:07',NULL),(6,'Dando un besito a mi amiga mariposa! Siempre está a mi lado. ','b0512fcb-e2cb-47ac-92b6-59fbd4f0c52d.jpg',2,'2023-04-27 16:05:45',NULL),(7,'Soy una serpiente con mucho estilo y siempre busco el mejor ángulo para salir en las fotos. ¿Qué tal mi pose? ??‍♀️ ','17c71807-e274-4a6d-85ce-9c002ae0c792.jpg',3,'2023-04-27 16:14:15',NULL),(9,'¿Qué puedo decir? Incluso los gorilas tenemos nuestro lado sexy. ¿No crees que esta pose es impresionante? ??‍♂️?','d1134625-92fb-4daa-a9f6-0f50eb60fa74.jpg',4,'2023-04-27 16:23:00',NULL),(10,'Nada como unas deliciosas hierbas para mantener mi físico de gorila en forma. #SoyLoQueComo??','999d9f8d-9330-476c-8735-d1df611326f5.jpg',4,'2023-04-27 16:23:59',NULL),(11,'Me encanta dormir en las alturas, con mi trono en el sofá.  #SiestaGatuna ???','25cb38b2-7967-4559-803c-f8aad25957a8.jpg',5,'2023-04-27 16:26:52',NULL),(12,'Acogedor y calentito en mi cueva de mantas. ??','4d96f29c-0824-4bb6-aa11-53158010dcf9.jpg',5,'2023-04-27 16:28:48',NULL),(13,'Juntos y en paz, los hermanos gatunos dormimos como angelitos después de una larga sesión de juegos. ????','cf9bc1fa-0d15-4b42-806a-d81a53199166.jpg',6,'2023-04-27 16:33:43',NULL),(14,'Listo para empezar el día con una buena sesión de estiramientos y mimos en la cama. ¡A disfrutar de la comodidad! ?☀️? ','307c8eca-25b8-4849-b62c-0efaa8e5f996.jpg',6,'2023-04-27 16:34:37',NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2023-04-27 16:51:03
