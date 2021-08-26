 const object = {

    name: "opu",
     age: 19,
     id: 50697,
 }
// just ekta const niye second bracket diye er maje object er name gula diye = sign diye object take call korlei kaj sesh..
 const {name,age,id} = object;
 console.log(object)

//  nested object.ektar bitore arekta.tahole take nicer way te call kore ante hobe

 const family = { bigperson:{ids:"blikis",isdeath:{ name:"abdur-roshid-miya",age:70}}, middlepersion:{name:"shimu,rasel,rokon", isdeath2:{name:"no one brother", age:"nothing"}}}

 const {name,age} = family.middlepersion.isdeath2
 console.log(name,age);

// array distructing ta holo parameter er moto.first e thakbe tar parameter second a thakbe tar value
 const [names,ages,tana] = [56,56,"mama","khaico"]
console.log(names,ages,tana);