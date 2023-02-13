//filter() method-: return new array with all elements that satisfies the condition that is passeed inside the filter method;
//The array elements that does not satisfy the condition inside filter () are skiped
const arrayOfNum = [0, 20, 3, 5, 6, 10];
 const arrayFilter =arrayOfNum.filter( (currentValue, index)=> {
    return currentValue > 5; // 0
 } );
 console.log(arrayFilter);

 class Vehicle 
 {constructor(company,model,fuel,drive,price)
    {
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
    let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
    let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
    let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
    let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
    let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);
    console.log("====== Filter out vehicles whose prices are greater than 200000=======");
    const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
    const arrayFilterVehicle = arrayOfVehicles.filter( vehicle => vehicle.price > 200000 );
    arrayFilterVehicle.forEach( (element) => {
        console.log(element.company, element.price);
    } );