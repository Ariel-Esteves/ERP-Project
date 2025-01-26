export async function PostMethod(product) {
  try {
    const response = await fetch("http://localhost:8080/api/produto", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    alert("Product saved successfully!");
    return await response.json();
  } catch (error) {
    alert("Failed to save product. Please try again.", error);
  }
}
