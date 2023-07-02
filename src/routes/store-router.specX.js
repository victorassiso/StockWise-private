// describe("Store Routes", () => {
//   it("should be able to create new stores", async () => {
//     const newStore = {
//       name: "Loja 1",
//       address: "Rua exemplo 000",
//       phone: "+55 (21) 9 9999-9999",
//     };

//     const res = await axios.post("http://localhost:3333/stores", newStore);

//     expect(res.data.store).toContain(newStore);
//   });

//   it("should be able to list all stores", async () => {
//     const res = await axios.get("http://localhost:3333/stores");

//     expect(res.data).toHaveProperty("stores");
//   });
// });
