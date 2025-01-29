export async function PostMethod(entity, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(entity),
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
