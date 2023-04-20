require("dotenv").config();

const getDB = require("./getDB");

const createTables = async () => {
	let connection;

	try {
		connection = await getDB();

		console.log("Deleting tables...");

		await connection.query("DROP TABLE IF EXISTS comments");
		await connection.query("DROP TABLE IF EXISTS likes");
		await connection.query("DROP TABLE IF EXISTS posts");
		await connection.query("DROP TABLE IF EXISTS users");

		console.log("Creating tables...");

		await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(30) UNIQUE NOT NULL,
      kind VARCHAR(50) NOT NULL,
      breed VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      about_me TEXT,
      avatar VARCHAR(100) DEFAULT 'default.jpg',
      role ENUM('user', 'admin', 'god') DEFAULT 'user',
      reg_code VARCHAR(100),
      active BOOLEAN DEFAULT false,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    );
    `);

		await connection.query(`
      CREATE TABLE IF NOT EXISTS posts (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      text TEXT,
      image VARCHAR(100),
      id_user INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id)
    );
    `);

		await connection.query(`
      CREATE TABLE IF NOT EXISTS likes (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      value BOOLEAN DEFAULT false,
      id_user INT UNSIGNED NOT NULL,
      id_post INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id),
      FOREIGN KEY(id_post) REFERENCES posts(id)
    );
    `);

		await connection.query(`
      CREATE TABLE IF NOT EXISTS comments (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      comment TINYTEXT NOT NULL,
      id_user INT UNSIGNED NOT NULL,
      id_post INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id),
      FOREIGN KEY(id_post) REFERENCES posts(id)
    );
    `);

		// console.log("Creating users, posts, comments and likes");

		// await connection.query(`
    //   INSERT INTO users (username, kind, breed, email, password, about_me, avatar, role, reg_code, active)
    //   VALUES 
    //     ('GatoAstuto','Felino','Siamés','gatoastuto@photopets.wouf','miau1234','Soy un gato muy astuto y me gusta cazar ratones.','default.jpg','user', NULL, 1),
    //     ('PerritoSalchicha','Canino','Salchicha','perritosalchicha@photopets.wouf','woof1234','Soy un perro pequeño y muy juguetón.','default.jpg','user', NULL, 1),
    //     ('CangrejoLoco','Crustáceo','Cangrejo ermitaño','cangrejoloco@photopets.wouf','cangrejo123','Soy un cangrejo ermitaño muy divertido.','default.jpg','user',NULL,1),
    //     ('JirafaAlta','Mamífero','Jirafa','jirafaalta@photopets.wouf','jirafa456','Soy una jirafa muy alta y elegante.','default.jpg','user',NULL,1),
    //     ('ElefanteRuidoso','Mamífero','Elefante','elefanteruidoso@photopets.wouf','elefante12','Soy un elefante muy ruidoso y me gusta bañarme en el río.','default.jpg','user',NULL,1),
    //     ('HormigaTrabajadora','Insecto','Hormiga','hormigatrabajadora@photopets.wouf','hormiga123','Soy una hormiga muy trabajadora y me gusta llevar cosas pesadas.','default.jpg','user',NULL,1),
    //     ('ConejitoVeloz','Roedor','Conejo','conejitoveloz@photopets.wouf','conejo456','Soy un conejito muy veloz y me gusta comer zanahorias.','default.jpg','user',NULL,1),
    //     ('MonoPayaso','Primate','Mono aullador','monopayaso@photopets.wouf','mono1234','Soy un mono muy divertido y me gusta hacer payasadas.','default.jpg','user',NULL,1),
    //     ('ZorroAstuto','Mamífero','Zorro','zorroastuto@photopets.wouf','zorro456','Soy un zorro muy astuto y me gusta cazar conejos.','default.jpg','user',NULL,1),
    //     ('OsoDormilón','Mamífero','Oso pardo','osodormilon@photopets.wouf','oso1234','Soy un oso muy dormilón y me gusta hibernar en invierno.','default.jpg','user',NULL,1),
    //     ('RanaSaltarina','Anfibio','Rana','ranasaltarina@photopets.wouf','rana1234','Soy una rana muy saltarina y me gusta vivir en la charca.','default.jpg','user',NULL,1),
    //     ('LeónFeroz','Felino','León','leonferoz@photopets.wouf','leon456','Soy un león muy feroz y me gusta cazar cebras.','default.jpg','user',NULL,1),
    //     ('PatoMandarín','Ave','Pato mandarín','patomandarin@photopets.wouf','pato1234','Soy un pato mandarín muy bonito y me gusta nadar en el lago.','default.jpg','user',NULL,1),
    //     ('TigreRayado','Felino','Tigre','tigrerayado@photopets.wouf','tigre1234','Soy un tigre rayado muy fuerte y me gusta dormir bajo el sol.','default.jpg','user',NULL,1),
    //     ('CebraRápida','Mamífero','Cebra','cebrarapida@photopets.wouf','cebra456','Soy una cebra muy rápida y me gusta correr por la sabana.','default.jpg','user',NULL,1),
    //     ('TiburónHambriento','Pez','Tiburón blanco','tiburonhambriento@photopets.wouf','tiburon123','Soy un tiburón muy hambriento y me gusta comer peces.','default.jpg','user',NULL,1),
    //     ('SerpienteSeductora','Reptil','Serpiente','serpienteseductora@photopets.wouf','serpiente456','Soy una serpiente muy seductora y me gusta tomar el sol en las rocas.','default.jpg','user',NULL,1),
    //     ('RatoncitoPerezoso','Roedor','Ratón','ratoncitoperezoso@photopets.wouf','raton1234','Soy un ratoncito muy perezoso y me gusta dormir todo el día.','default.jpg','user',NULL,1),
    //     ('GorilaMusculoso','Primate','Gorila','gorilamusculoso@photopets.wouf','gorila456','Soy un gorila muy musculoso y me gusta comer frutas.','default.jpg','user',NULL,1),
    //     ('CaballoVeloz','Mamífero','Caballo','caballoveloz@photopets.wouf','caballo1234','Soy un caballo muy veloz y me gusta correr en el campo.','default.jpg','user',NULL,1),
    //     ('MariquitaFeliz','Insecto','Mariquita','mariquitafeliz@photopets.wouf','mariquita456','Soy una mariquita muy feliz y me gusta volar por el jardín.','default.jpg','user',NULL,1),
    //     ('ArdillaSaltarina','Roedor','Ardilla','ardillasaltarina@photopets.wouf','ardilla123','Soy una ardilla muy saltarina y me gusta recolectar nueces.','default.jpg','user',NULL,1),
    //     ('HipopótamoHambriento','Mamífero','Hipopótamo','hipopotamohambriento@photopets.wouf','hipopotamo123','Soy un hipopótamo muy hambriento y me gusta comer hierba.','default.jpg','user',NULL,1),
    //     ('MurciélagoNocturno','Mamífero','Murciélago','murcielagonocturno@photopets.wouf','murcielago456','Soy un murciélago nocturno y me gusta volar por la noche.','default.jpg','user',NULL,1),
    //     ('PerroCaliente','Canino','Chihuahua','perrocaliente@photopets.wouf','perro456','Soy un perro pequeño y caliente y me gusta jugar con mi pelota.','default.jpg','user',NULL,1);
		// `);

		// await connection.query(`
    //   INSERT INTO posts (text, image, id_user)
    //   VALUES 
    //     ('¿Por qué las vacas tienen cascos en los pies? Para no deslizarse en la leche. #FarmJokes','default.jpg',6),
    //     ('¿Por qué las vacas tienen cascos en los pies? Para no deslizarse en la leche. #FarmJokes','default.jpg',12),
    //     ('Acabo de descubrir que soy alérgico al trabajo. Cada vez que me acerco, me dan ganas de estornudar. #WorkingFromHome','default.jpg',15),
    //     ('¿Sabías que los gatos tienen un promedio de 100.000 pelos por centímetro cuadrado? Eso explica por qué siempre encuentras pelos en tu ropa. #CatFacts','default.jpg',15),
    //     ('Hoy me he levantado con ganas de comerme el mundo, pero me conformaré con una galletita. #Delicious','default.jpg',4),
    //     ('¿Qué hace un perro con un taladro? Huesos nuevos. #DogJokes','default.jpg',23),
    //     ('¡Feliz viernes! ¿Alguien más ya está pensando en el fin de semana? #TGIF','default.jpg',3),
    //     ('¿Sabías que los elefantes pueden dormir de pie? Eso sí que es un talento. #AnimalFacts','default.jpg',21),
    //     ('¿Qué le dijo un pato a otro pato? Nada, porque los patos no hablan. #DuckJokes','default.jpg',19),
    //     ('¿Por qué los koalas no son osos? Porque no cumplen con los requisitos del oso. #KoalaFacts','default.jpg',6),
    //     ('Acabo de ver a un pájaro carpintero tocando una batería. ¡Eso sí que es música con percusión! #MusicJokes','default.jpg',23),
    //     ('¡Hoy es el Día Internacional de los Gatos! ¿Cómo lo estás celebrando? #InternationalCatDay','default.jpg',21),
    //     ('¿Por qué el canguro es el animal más feliz? Porque tiene una bolsa en la que puede llevar todo lo que quiere. #KangarooJokes','default.jpg',11),
    //     ('¿Sabías que los conejos pueden saltar hasta 10 veces su longitud? Eso es como saltar sobre un edificio de tres pisos. #RabbitFacts','default.jpg',16),
    //     ('¿Qué hace un gato cuando se quita la chaqueta? Se queda en mangas gatunas. #CatJokes','default.jpg',20),
    //     ('Hoy he decidido que voy a comer más sano. ¿Alguien quiere compartir mi pizza? #HealthyEating','default.jpg',1),
    //     ('¿Qué le dijo un búho a otro búho? Nada, porque los búhos no hablan. #OwlJokes','default.jpg',21),
    //     ('¡Mira qué guapo estoy hoy! #fashion','default.jpg',11),
    //     ('¿Soy el único que piensa que los gatos son espías? #conspiración','default.jpg',3),
    //     ('Mi humana me ha obligado a ponerme este jersey... #odioelotoño','default.jpg',17),
    //     ('¡Me han pillado! Intentando robar las galletas... #pantaloncorto','default.jpg',24),
    //     ('¿Alguien más se ha levantado con hambre de lobo hoy? #desayunosaludable','default.jpg',7),
    //     ('No soy gordo, solo estoy lleno de amor #amorporlosnuggets','default.jpg',21),
    //     ('¿Qué pasa si mezclo comida de perro y comida de gato? #experimento','default.jpg',10),
    //     ('¿Alguien quiere jugar a la pelota? #pelotapreferida','default.jpg',9),
    //     ('Mi mejor ángulo #photogenic','default.jpg',16),
    //     ('Aprovechando el sol en mi balcón #vidadeperro','default.jpg',6),
    //     ('Ellos dicen que no puedo subir al sofá... #soylarebelión','default.jpg',8),
    //     ('¿Alguien más se siente cansado hoy? #siestanecesaria','default.jpg',22),
    //     ('¡Me encanta el invierno! #nieve','default.jpg',4),
    //     ('¿Por qué me miras así? #quemásquieres','default.jpg',14),
    //     ('Mi humana no puede resistirse a darme un trocito de lo que está comiendo... #miradasqueenamoran','default.jpg',1),
    //     ('¿Alguien quiere jugar a las cartas? #pokerface','default.jpg',25),
    //     ('Creo que me he pasado con las compras... #fashiondog','default.jpg',12),
    //     ('¿Alguien más tiene miedo de los petardos? #traumasinfancia','default.jpg',18),
    //     ('Mi humana me ha obligado a hacer deporte... #odioeldeporte','default.jpg',19),
    //     ('Estoy obsesionado con esta pelota #favorita','default.jpg',5),
    //     ('¿Alguien más tiene problemas de personalidad? #moodswings','default.jpg',13),
    //     ('No me gusta el lunes... #odiolunes','default.jpg',23),
    //     ('¡Me encanta el sabor de esta zanahoria! #comidassanas','default.jpg',2);
    // `);

    // await connection.query(`
    //   INSERT INTO likes (value, id_user, id_post)
    //   VALUES 
    //     (1,11,3),
    //     (1,3,16),
    //     (1,14,23),
    //     (1,7,20),
    //     (1,18,3),
    //     (1,4,26),
    //     (1,17,21),
    //     (1,13,38),
    //     (1,6,9),
    //     (1,10,16),
    //     (1,20,28),
    //     (1,2,14),
    //     (1,11,7),
    //     (1,13,4),
    //     (1,24,15),
    //     (1,2,9),
    //     (1,22,24),
    //     (1,11,13),
    //     (1,8,23),
    //     (1,24,37),
    //     (1,21,15),
    //     (1,9,27),
    //     (1,7,12),
    //     (1,17,16),
    //     (1,25,30),
    //     (1,18,16),
    //     (1,20,28),
    //     (1,5,35),
    //     (1,19,3),
    //     (1,3,16),
    //     (1,16,36),
    //     (1,15,14),
    //     (1,23,18),
    //     (1,12,4),
    //     (1,2,39),
    //     (1,18,21),
    //     (1,13,40),
    //     (1,11,4),
    //     (1,6,34),
    //     (1,15,14),
    //     (1,25,32),
    //     (1,3,3),
    //     (1,3,11),
    //     (1,1,11),
    //     (1,7,20),
    //     (1,18,2),
    //     (1,2,9),
    //     (1,22,28),
    //     (1,22,6),
    //     (1,6,27);
    // `);

    // await connection.query(`
    //   INSERT INTO comments (comment, id_user, id_post)
    //   VALUES 
    //     ('¿Y cómo se supone que un perro debería hacer eso?',6,1),
    //     ('Jajaja, yo también odio los baños',19,1),
    //     ('¡Los humanos son tan extraños!',21,6),
    //     ('Eso no es gracioso, es simplemente ridículo',4,18),
    //     ('¿En serio piensas que soy tan tonto como para caer en esa?',12,8),
    //     ('Como si un gato necesitara un manual para hacer cualquier cosa',12,37),
    //     ('¿Cómo se supone que debo usar esto sin pulgares?',16,31),
    //     ('Jajaja, como si los humanos supieran algo de diversión',15,39),
    //     ('Los humanos son extraños, nunca entenderé por qué les gusta hacer esto',15,12),
    //     ('¿Eso es todo lo que tienes? ¡Por favor, dame algo desafiante!',16,11),
    //     ('Jajaja, ese pájaro no tiene idea de con quién está hablando',24,34),
    //     ('¡Por supuesto que puedo abrir la puerta! Solo necesito un poco de tiempo',24,17),
    //     ('¿Qué tal si mejor me das algo de comida en vez de fotos?',1,1),
    //     ('¿Alguna vez has intentado correr en dos patas? Es más difícil de lo que parece',18,29),
    //     ('No me hables de dietas, ¡estoy intentando disfrutar mi vida!',4,35),
    //     ('¡Ese hueso tiene muy buena pinta!',5,1),
    //     ('¡Qué guapo y elegante estás!',18,1),
    //     ('¿Eso es un juguete o una deliciosa comida?',24,2),
    //     ('¡La fotografía es genial! ¡Realmente te ves adorable!',8,2),
    //     ('¿Estás listo para una caminata en el parque?',14,2),
    //     ('¡Esa pelota es gigante! ¿Cómo la puedes sostener?',3,3),
    //     ('¡Hoy es un gran día para hacer travesuras!',11,3),
    //     ('¡El sol está brillando y es un día hermoso!',17,3),
    //     ('¡Mira esas orejas! ¡Eres un perro muy especial!',19,4),
    //     ('¡Estás en una posición muy divertida! ¡Me encanta!',6,4),
    //     ('¡La fotografía es perfecta! ¡Eres el mejor modelo!',21,4),
    //     ('¿Dónde conseguiste ese increíble lazo? ¡Se ve fantástico!',23,5),
    //     ('¡Eres tan lindo y esponjoso! ¡Quiero abrazarte!',1,5),
    //     ('¡Estás en una gran aventura! ¡Qué envidia!',15,5),
    //     ('¡Eres un gato muy elegante! ¡Me encanta ese traje!',9,6),
    //     ('¡Esa caja parece un gran lugar para esconderse y jugar!',12,6),
    //     ('¡Estás en una posición muy divertida! ¡Me haces reír!',22,6),
    //     ('¡Te ves muy feliz y emocionado en esa foto!',7,7),
    //     ('¡Esa pelota es genial! ¡Me encantaría jugar contigo!',2,7),
    //     ('¡Eres un perro tan inteligente y bien entrenado!',16,7),
    //     ('¡Me encanta tu pelaje suave y esponjoso! ¡Eres tan lindo!',4,8),
    //     ('¡Esa cama se ve muy cómoda! ¡Me encantaría dormir allí!',10,8),
    //     ('¡La fotografía es increíble! ¡Me encanta tu expresión!',20,8),
    //     ('¡Me encanta tu camiseta! ¡Es muy graciosa!',25,9),
    //     ('¡Eres un perro muy guapo! ¡Me encantaría acariciarte!',14,9),
    //     ('¡Ese hueso se ve muy sabroso! ¡Me encantaría morderlo!',6,9),
    //     ('¡Eres un gato muy inteligente y astuto! ¡Me encanta!',3,10),
    //     ('¡Me encanta esa cuerda! ¡Podríamos jugar juntos todo el día!',13,10),
    //     ('¡Esa foto es perfecta! ¡Me encanta tu expresión!',19,10),
    //     ('¡Eres un perro muy guapo y musculoso! ¡Me impresionas!',2,11),
    //     ('¿Es este el famoso juego de la pelota? ¡Yo quiero jugar también!',11,30),
    //     ('No soy yo quien está atascado, ¡el tazón es demasiado pequeño para mi cabeza!',13,13),
    //     ('¿Quién necesita un montón de juguetes cuando hay cajas vacías en el mundo?',1,7),
    //     ('Mira, ¡puedo volar! Oh, espera, eso es solo una mosca.',7,6),
    //     ('La vida es mejor con amigos peludos, ¡y yo tengo al mejor!',20,17);
    // `);

		// console.log("¡Users, posts, comments and likes created!");
	} catch (err) {
		console.error(err);
	} finally {
		if (connection) connection.release();

		process.exit();
	}
};

createTables();
