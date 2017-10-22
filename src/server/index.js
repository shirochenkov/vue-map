export default {

  // basic mock
  ['GET */cupcakes'] (pathMatch, query, request) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs
    let body = [
      { id: 1, lat: 55.745955901976764, lng: 37.6003646850586 },
      { id: 2, lat: 55.75252563689488, lng: 37.60087966918946 },
      { id: 3, lat: 55.75745221206816, lng: 37.59847640991212 },
      { id: 4, lat: 55.76546864129316, lng: 37.604999542236335 },
      { id: 5, lat: 55.76826917386254, lng: 37.61255264282227 },
      { id: 6, lat: 55.76672407732225, lng: 37.63504028320313 },
      { id: 7, lat: 55.7594806209808, lng: 37.64499664306641 },
      { id: 8, lat: 55.75030364449042, lng: 37.64413833618165 }
    ]
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, // millisecond
    }
  },

  ['GET */pizza'] (pathMatch, query, request) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs
    let body = [
      { id: 1, lat: 55.74624576655157, lng: 37.604484558105476 },
      { id: 2, lat: 55.75011042177816, lng: 37.60637283325196 },
      { id: 3, lat: 55.757741991229274, lng: 37.61032104492188 },
      { id: 4, lat: 55.76276448792348, lng: 37.613754272460945 },
      { id: 5, lat: 55.76585493360784, lng: 37.61632919311524 },
      { id: 6, lat: 55.76189525593947, lng: 37.62182235717774 },
      { id: 7, lat: 55.75754880536109, lng: 37.62542724609376 },
      { id: 8, lat: 55.75397469418902, lng: 37.62765884399415 },
      { id: 9, lat: 55.74895106540675, lng: 37.63263702392579 },
      { id: 10, lat: 55.74605252374098, lng: 37.635211944580085 },
      { id: 11, lat: 55.74566603524846, lng: 37.62851715087891 },
      { id: 12, lat: 55.74566603524846, lng: 37.618732452392585 },
      { id: 13, lat: 55.745376166366704, lng: 37.611007690429695 },
      { id: 14, lat: 55.75532709909638, lng: 37.605514526367195 }
    ]
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, // millisecond
    }
  },

  ['GET */groceries'] (pathMatch, query, request) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs
    let body = [
      { id: 1, lat: 55.751366352300806, lng: 37.615985870361335 }
    ]
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, // millisecond
    }
  }

}
