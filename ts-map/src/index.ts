import {User} from './User'
// import {Company} from './Company'
import {CustomMap} from './CustomMap'
import { Company } from './Company'


const customMap = new CustomMap('map')
customMap.addMarker(new User)
customMap.addMarker(new Company)