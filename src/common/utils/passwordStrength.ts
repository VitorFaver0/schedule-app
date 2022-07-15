export function passwordStrength(password:string) 
{
	var numeros = /([0-9])/;
	var alfabeto = /([a-zA-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if(password.match(numeros) && password.match(alfabeto) && password.match(chEspeciais))
    {            
        return true;
    } 
    return false;
}