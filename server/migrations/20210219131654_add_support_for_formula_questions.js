
exports.up = function(knex) {
    return knex.schema.table("questions", function (table) {
        table.text("formula");
        table.enu('type', ['MC', 'FQ']).defaultTo('MC').notNullable();
    });    
};

exports.down = function (knex) {
    return knex.schema.table("questions", function (table) {
        table.dropColumn('formula');
        table.dropColumn('type');
    });
};