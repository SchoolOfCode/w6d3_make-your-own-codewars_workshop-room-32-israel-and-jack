//👉 Write your tests below here:

describe("Tests for pokemon kata", function () {
  test("When array has Dragonite's move property updated to Thunder, test has passed", function () {
    //arrange
    const array = [
      { name: "Cherubi", move: "Charm" },
      { name: "Pikachu", move: "Thunderbolt" },
      { name: "Dragonite", move: "Fire Blast" },
      { name: "Feraligatr", move: "Surf" },
    ];

    const expected = [
      { name: "Cherubi", move: "Charm" },
      { name: "Pikachu", move: "Thunderbolt" },
      { name: "Dragonite", move: "Thunder" },
      { name: "Feraligatr", move: "Surf" },
    ];

    //act
    const actual = newMove(array);

    //assert
    expect(actual).toEqual(expected);
  });
});
