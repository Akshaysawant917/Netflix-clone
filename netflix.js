const boxs= document.querySelectorAll(".boxf");

  boxs.forEach(box=>{
      const icon= box.querySelector(".icon");
      const answer=box.querySelector(".answer");
  
      box.addEventListener("click",()=>{
          icon.classList.toggle("active");
          answer.classList.toggle("active")
      })
  })