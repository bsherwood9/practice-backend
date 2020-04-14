exports.up = function(knex) {
  return knex.schema.createTable("models", tbl => {
    tbl.increments();
    tbl.string("images");
    tbl
      .text("name")
      .notNullable()
      .unique();
    tbl.decimal("price").notNullable();
    tbl.text("description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("models");
};
