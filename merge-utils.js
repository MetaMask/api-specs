
const dedupe = (methods1, methods2) => {
  return methods1.reduce(
    (arr, method) => {
      if (arr.find((m2) => m2.name === method.name) === undefined) {
        arr.push(method);
      }
      return arr;
    },
    methods2
  );
};

const mergeOpenRPC = (first, second) => {
  return {
    openrpc: first.openrpc,
    info: first.info,
    methods: dedupe(second.methods, first.methods),
    components: {
      errors: {
        ...first.components.errors,
        ...second.components.errors
      },
      schemas: {
        ...first.components.schemas,
        ...second.components.schemas
      },
      tags: {
        ...first.components.tags,
        ...second.components.tags
      },
      contentDescriptors: {
        ...first.components.contentDescriptors,
        ...second.components.contentDescriptors
      },
      examplePairings: {
        ...first.components.examplePairings,
        ...second.components.examplePairings
      },
      links: {
        ...first.components.links,
        ...second.components.links
      },
      examples: {
        ...first.components.examples,
        ...second.components.examples
      }
    }
  };
};

module.exports = mergeOpenRPC;
