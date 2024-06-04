    /*crear tabla*/
create table Cliente(
	id serial not null primary key,
	nit varchar(50),
	razon varchar(50),
	correo varchar(50),
	telefono varchar(50),
	creado varchar(50),
	estado varchar(50)
)

	/*INSERTAR*/
insert into Cliente(nit,razon,correo,telefono,creado,estado) 
	values ('9005347895','Prueba1','desarrollador.andrescalero@gmail.com',
	'3235865827','Andres Calero','Activo')

	/*Mostrar*/
select * from Cliente