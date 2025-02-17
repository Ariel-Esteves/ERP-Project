async function postMethod(entity, url) {
  console.log(entity, url);
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(entity),
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
      mode: "cors",
    });
    alert("response status: " + response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else if (response.status == 403) {
      throw new Error("Invalid token");
    }
    console.log("Product saved successfully!");
    return await response.json();
  } catch (error) {
    console.log("Failed to save product. Please try again.", error);
  }
}

async function getMethod(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Response successfully!");
    return await response.json();
  } catch (error) {
    console.log("Failed to get. Please try again.", error);
  }
}

async function findMethod(url, id) {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Response successfully!");
    return await response.json();
  } catch (error) {
    console.log("Failed to get. Please try again.", error);
  }
}

async function deleteMethod(url, id) {
  try {
    const response = await fetch(url + `${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("token") && {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Response successfully!");
    return await response.json();
  } catch (error) {
    console.log("Failed to get. Please try again.", error);
  }
}

export { postMethod, getMethod, findMethod, deleteMethod };
