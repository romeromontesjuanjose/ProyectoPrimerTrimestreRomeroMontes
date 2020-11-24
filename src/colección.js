//Borrar la base de datos
db.cine.drop()

//Insertar la base de datos
db.cine.insertMany([
    {ciudad:"Sevilla",película:{nombre:"Las maravillas del fondo",duración:81.23,créditos:1.23,fecha:new Date("2010-12-26"),estreno:false,audiencia:["adultos","ancianos"]},ingresos:{precio:8.99,ventas:18,beneficio:161.82}},
    {ciudad:"Barcelona",película:{nombre:"El tren perdido",duración:93.42,créditos:2.34,fecha:new Date("2020-03-13"),estreno:true,audiencia:["niños","adultos","ancianos"]},ingresos:{precio:16.90,ventas:30,beneficio:480.00}},
    {ciudad:"Madrid",película:{nombre:"Adiós querido amigo",duración:103.32,créditos:0.52,fecha:new Date("2018-08-26"),estreno:false,audiencia:["niños","adultos"]},ingresos:{precio:12.49,ventas:36,beneficio:449.64}},
    {ciudad:"Zaragoza",película:{nombre:"El increíble secreto de Raul",duración:154.82,créditos:3.26,fecha:new Date("2015-01-06"),estreno:false,audiencia:["adultos","ancianos"]},ingresos:{precio:19.99,ventas:52,beneficio:1039.98}},
    {ciudad:"Sevilla",película:{nombre:"Lo que el agua se llevó",duración:165.35,créditos:1.52,fecha:new Date("2020-03-26"),estreno:true,audiencia:["niños","adultos"]},ingresos:{precio:6.49,ventas:49,beneficio:318.01}},
    {ciudad:"Oviedo",película:{nombre:"Mujer",duración:95.23,créditos:2.11,fecha:new Date("2019-02-23"),estreno:false,audiencia:["niños","ancianos"]},ingresos:{precio:12.90,ventas:37,beneficio:477.3}},
    {ciudad:"Santander",película:{nombre:"El cubo",duración:56.32,créditos:3.47,fecha:new Date("2014-07-14"),estreno:true,audiencia:["niños","adultos","ancianos"]},ingresos:{precio:7.49,ventas:28,beneficio:209.72}},
    {ciudad:"Ceuta",película:{nombre:"Lento y calmado",duración:95.61,créditos:2.22,fecha:new Date("2011-01-30"),estreno:true,audiencia:["niños","adultos","ancianos"]},ingresos:{precio:16.90,ventas:61,beneficio:43730.90}},
    {ciudad:"Logroño",película:{nombre:"1978",duración:180.63,créditos:1.23,fecha:new Date("2012-09-23"),estreno:false,audiencia:["adultos","ancianos"]},ingresos:{precio:13.99,ventas:37,beneficio:517.63}},
    {ciudad:"Barcelona",película:{nombre:"El espacio exterior",duración:135.26,créditos:4.02,fecha:new Date("2019-05-24"),estreno:true,audiencia:["niños","ancianos"]},ingresos:{precio:9.90,ventas:21,beneficio:207.90}},
    {ciudad:"Murcia",película:{nombre:"Mi vecina Julia",duración:49.86,créditos:2.56,fecha:new Date("2020-10-11"),estreno:true,audiencia:["adultos","ancianos"]},ingresos:{precio:8.90,ventas:41,beneficio:364.90}},
    {ciudad:"Valencia",película:{nombre:"Padres descontrolados",duración:53.25,créditos:0.36,fecha:new Date("2013-07-04"),estreno:false,audiencia:["adultos","ancianos"]},ingresos:{precio:17.99,ventas:37,beneficio:665.63}},
    {ciudad:"Madrid",película:{nombre:"Que dificil es estar solo",duración:51.68,créditos:3.00,fecha:new Date("2016-11-28"),estreno:true,audiencia:["niños","ancianos"]},ingresos:{precio:15.99,ventas:26,beneficio:415.64}},
    {ciudad:"Pamplona",película:{nombre:"El regreso de la niebla",duración:79.35,créditos:0.17,fecha:new Date("2020-02-07"),estreno:true,audiencia:["niños","adultos",]},ingresos:{precio:16.99,ventas:18,beneficio:305.82}},
    {ciudad:"Oviedo",película:{nombre:"A la tercera va la vencida",duración:86.34,créditos:3.53,fecha:new Date("2011-11-24"),estreno:true,audiencia:["niños","ancianos"]},ingresos:{precio:14.99,ventas:37,beneficio:554.63}},
])

//Mostrar toda la base de datos (excluyendo de cada registro al identificador)
db.cine.find({},{_id:0}).pretty()