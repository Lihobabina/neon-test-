let currentPart = 1;
  const totalParts = 7; // Общее количество элементов part

  function showNextPart(nextPartNumber) {
    const currentPartElement = document.getElementById(`part${currentPart}`);
    const nextPartElement = document.getElementById(`part${nextPartNumber}`);

    currentPartElement.classList.remove("slide-in");
    currentPartElement.classList.add("slide-out-left");

    nextPartElement.classList.add("slide-in");
    nextPartElement.classList.remove("slide-out-right");

    currentPart = nextPartNumber;
  }

  function showPrevPart(prevPartNumber) {
    const currentPartElement = document.getElementById(`part${currentPart}`);
    const prevPartElement = document.getElementById(`part${prevPartNumber}`);

    currentPartElement.classList.remove("slide-in");
    currentPartElement.classList.add("slide-out-right");

    prevPartElement.classList.add("slide-in");
    prevPartElement.classList.remove("slide-out-left");

    currentPart = prevPartNumber;
  }