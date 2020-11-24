/*En esta consulta buscaremos las películas que hayan generado más de 500€ de beneficio
mostrando la ciudad en la que se proyecto, el nombre de la película y los datos de los ingresos*/
db.cine.find({"ingresos.beneficio":{$gte:500}},{_id:0,ciudad:1,"película.nombre":1,ingresos:1}).pretty()

/*En esta consulta buscaremos las películas que hayan sido proyectadas entre el 1 de Enero de 2013
y el 1 de Enero de 2015, además estas no deben de ser estrenos.*/
db.cine.find({$and:[{"película.fecha": {$lte: new Date("2015-01-01") , $gte: new Date("2013-01-01")}} , {"película.estreno":false} ]} , {_id:0}).pretty()

/*En esta consulta buscaremos las películas orientadas a los niños y ancianos tan solo*/
db.cine.find({"película.audiencia": {$eq:["niños","ancianos"]}} , {_id:0}).pretty()

/*En esta consulta buscaremos las películas que han sido proyectadas en Madrid y que duren menos
de una hora*/
db.cine.find({$and:[{ciudad:{$eq:"Madrid"}} , {"película.duración":{$lt:60.00}}]} , {_id:0}).pretty()

/*En esta consulta buscaremos las películas que tienen más de 3 minutos de créditos o que esten 
orientadas a todos los públicos*/
db.cine.find({$or:[{"película.créditos":{$gt:3.00}} ,{"película.audiencia":{$eq:["niños","adultos","ancianos"]}} ]} , {_id:0}).pretty()

/*En esta consulta buscaremos las películas que no hayan sido proyectadas en Barcelona, Sevilla ni Madrid */
db.cine.find({ ciudad:{$not:{$in:["Barcelona","Sevilla","Madrid"]}}} , {_id:0}).pretty()
//también se puede expresar como:
db.cine.find({ciudad:{$nin:["Barcelona","Sevilla","Madrid"]}} , {_id:0}).pretty()

/*En esta consulta buscaremos las películas que no hayan sido proyectadas en Barcelona ni que hayan recaudado 480 euros*/
db.cine.find({$nor:[{ciudad:"Barcelona"} , {"ingresos.beneficios":480}]}, {_id:0}).pretty()


/* */
db.cine.find({"película.audiencia":{$ne:"niños"}} , {_id:0} ).pretty()

/*En esta consulta buscaremos las películas cuyo nombre empieza por 'El', que sean posteriores al 
1 de Junio de 2019 y cuyas ventas sean superiores a 20 tickets*/
db.cine.find({$and:[ {"película.nombre":{$regex:/El/}} , {"película.fecha":{$gte: new Date("2019-06-01")}}, {"ingresos.ventas":{$gt:20}} ]} , {_id:0}).pretty()
