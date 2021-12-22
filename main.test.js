//👉 Write your tests below here:
import { newMove } from "./main.js";

describe("Tests for pokemon kata", function () {
  // test("Dragonite's move property should be updated to 'Thunder'.", function () {
  //   //arrange
  //   const array = [
  //     { name: "Cherubi", move: "Charm" },
  //     { name: "Pikachu", move: "Thunderbolt" },
  //     { name: "Dragonite", move: "Thunder" },
  //     { name: "Feraligatr", move: "Surf" },
  //   ];

  //   const expected = [
  //     { name: "Cherubi", move: "Charm" },
  //     { name: "Pikachu", move: "Thunderbolt" },
  //     { name: "Dragonite", move: "Thunder" },
  //     { name: "Feraligatr", move: "Surf" },
  //   ];

  //   //act
  //   const actual = newMove(array);

  //   //assert
  //   expect(actual).toStrictEqual(expected);
  // });

  // test("Dragonite's move property should contain a move of type string.", function () {
  //   //arrange
  //   const array = [
  //     { name: "Cherubi", move: "Charm" },
  //     { name: "Pikachu", move: "Thunderbolt" },
  //     { name: "Dragonite", move: "Fire Blast" },
  //     { name: "Feraligatr", move: "Surf" },
  //   ];

  //   const expected = [
  //     { name: "Cherubi", move: "Charm" },
  //     { name: "Pikachu", move: "Thunderbolt" },
  //     { name: "Dragonite", move: expect.any(String) },
  //     { name: "Feraligatr", move: "Surf" },
  //   ];

  //   //act
  //   const actual = newMove(array);

  //   //assert
  //   expect(actual).toStrictEqual(expected);
  // });

  test("Cherubi should be in the third position, Dragonite should be in the first position with move set to 'Thunder'.", function () {
    //arrange
    // const array = [
    //   { name: "Dragonite", move: "Thunder" },
    //   { name: "Pikachu", move: "Thunderbolt" },
    //   { name: "Cherubi", move: "Charm" },
    //   { name: "Feraligatr", move: "Surf" },
    // ];

    const expected = [
      { name: "Dragonite", move: "Thunder" },
      { name: "Pikachu", move: "Thunderbolt" },
      { name: "Cherubi", move: "Charm" },
      { name: "Feraligatr", move: "Surf" },
    ];

    //act
    const actual = newMove();

    //assert
    expect(actual).toStrictEqual(expected);
  });
});
