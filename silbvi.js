const edad50SG = 15
let personas = [
  {
	  nombre: 'David',
	  edad: 29,
	  acompañado: false,
	  dif: function() {
	  	return this.edad - edad50SG
	  }
	},
	{
	  nombre: 'Silvia',
	  edad: 15,
	  acompañado: true,
	  dif: function() {
	  	return this.edad - edad50SG
	  }
	},
	{
	  nombre: 'Erick',
	  edad: 12,
	  acompañado: true,
	  dif: function() {
	  	return this.edad - edad50SG
	  }
	},
	{
	  nombre: 'Dayana',
	  edad: 14,
	  acompañado: false,
	  dif: function() {
	  	return this.edad - edad50SG
	  }
	}
]

for(let i = 0; i < personas.length; i++) {
  console.log(`Persona ${i+1}`);
  if( personas[i].dif() > -1 )
    console.log(`${personas[i].nombre} estás permitido a ver la película`)
  else if( personas[i].acompañado )
    console.log(`${personas[i].nombre} puedes entrar a ver la película, aunque tu edad es ${personas[i].edad} años, por estar acompañado de una persona mayor`)
  else
    console.log(`${personas[i].nombre} no estas permitid@ a ver la película, porque tienes ${personas[i].edad} años, la edad mínima es de ${edad50SG}`)
}
