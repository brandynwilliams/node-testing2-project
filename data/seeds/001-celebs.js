exports.seed = async function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  await knex('celebs').truncate()
  await knex('celebs').insert([
    { first_name: "Elon", last_name: "Musk", job: "ceo" },
    { first_name: "Dwayne", last_name: "Johnson", job: "actor" },
    { first_name: "Ryan", last_name: "Reynolds", job: "actor" },
    { first_name: "Jordan", last_name: "Peterson", job: "speaker" },
  ]);
};