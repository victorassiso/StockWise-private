import { describe, expect, it, test } from "vitest";
import axios from "axios";

describe("Stores", () => {
  it("should be able to create new stores", async () => {
    console.log("Create Store Test");
    const store = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    const res = await axios.post("http://localhost:3333/stores", store);

    expect(res.data).toHaveProperty("store");
    expect(res.data.store).toHaveProperty("id");
    expect(res.data.store).toHaveProperty("name", "Loja 1");
    expect(res.data.store).toHaveProperty("address", "Rua exemplo 000");
    expect(res.data.store).toHaveProperty("phone", "+55 (21) 9 9999-9999");
    expect(res.data.store).toHaveProperty("created_at");
    expect(res.data.store).toHaveProperty("updated_at");
  });

  it("should be able to list all stores", async () => {
    const res = await axios.get("http://localhost:3333/stores");

    expect(res.data).toHaveProperty("stores");
  });
});
