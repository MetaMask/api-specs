const fs = require("fs");
const fetch = require("node-fetch");
const merger = require("json-schema-merge-allof");
const { dereferenceDocument, parseOpenRPCDocument } = require("@open-rpc/schema-utils-js");

// recursiveMerge is from https://github.com/ethereum/execution-apis/blob/main/scripts/build.js#L55-L67

function recursiveMerge(schema) {
  schema = merger(schema);

  if("items" in schema && "oneOf" in schema.items) {
      schema.items.oneOf = recursiveMerge(schema.items.oneOf);
  }
  if("oneOf" in schema) {
    for(var k=0; k < schema.oneOf.length; k++) {
      schema.oneOf[k] = recursiveMerge(schema.oneOf[k]);
    }
  }
  return schema;
}

// mergeAllOfOpenRPC is from https://github.com/ethereum/execution-apis/blob/main/scripts/build.js#L69-L75
const mergeAllOfOpenRPC = async (openrpcDoc) => {
  const spec = await parseOpenRPCDocument(openrpcDoc);
  // Merge instances of `allOf` in methods.
  for (var i=0; i < spec.methods.length; i++) {
    if (spec.methods[i].params) {
      for (var j=0; j < spec.methods[i].params.length; j++) {
        spec.methods[i].params[j].schema = recursiveMerge(spec.methods[i].params[j].schema);
      }
    }
    spec.methods[i].result.schema = recursiveMerge(spec.methods[i].result.schema);
  }
}
module.exports = {
  mergeAllOfOpenRPC,
}


// const main = async () => {
//  await mergeAllOfOpenRPC(MetaMaskOpenRPC);
//  fs.writeFileSync(__dirname + "/build/metamask-openrpc-merged.json", JSON.stringify(MetaMaskOpenRPC, null, 4));
// }


// main().catch((e) => console.log(e));
