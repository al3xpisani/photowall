
/*Instructionsto every other class
on how they can be an argument to 'addMarker'*/
export interface Mappable {
  location:{
    lat:number,
    lng:number
  },
  markerContent():string,
  color:string
}

export class CustomMap{
  private googleMap: google.maps.Map

  mapOptions ={
    zoom:1,
    center: {
      lat: 0,
      lng: 0
    }
    
  }
  
  constructor(elementID:string){
    this.googleMap = new google.maps.Map(document.getElementById(elementID),this.mapOptions)
  }

  addMarker(mappable: Mappable):void{
    const marker = new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.lng
      }
    });

    marker.addListener('click',()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap,marker)

    })

  }


  
}
