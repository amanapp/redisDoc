import { stringRoute } from "../modules/string/string.route";
import { hashRoute } from "../modules/hash/hash.route";
import { listRoute } from "../modules/list/list.route";
import { setRoute } from "../modules/set/set.routes";
import { geoRoute } from "../modules/geospatial/geospatial.routes";



export const routes: any = [
	...stringRoute,
	...hashRoute,
	...listRoute,
    ...setRoute,
	...geoRoute,
];