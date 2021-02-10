function getNewObject(value, removeFromSchema, field, option) {
    let object = { ...value };

    for (let index = 0; index < removeFromSchema.length; index++) {
        delete object[removeFromSchema[index]];
    }

    object[field] = [option];

    return object;
}

function getOption(value, removeFromSchema) {
    const option = {};

    for (let index = 0; index < removeFromSchema.length; index++) {
      if (removeFromSchema[index] !== "id") {
        option[removeFromSchema[index]] = value[removeFromSchema[index]];
      }
    }

    return option;
}

function getResult(result, field, removeFromSchema, determiner) {
  let results = [];

  result.rows.map((value) => {
    const option = getOption(value, removeFromSchema);

    if (!results.map((value) => value[determiner]).includes(value[determiner])) {
      let object = getNewObject(value, removeFromSchema, field, option);
      results.push(object);
    } else {
      const index = results
        .map((value) => value[determiner])
        .indexOf(value[determiner]);
      results[index][field].push(option);
    }
  });

  return results;
}

module.exports = getResult;