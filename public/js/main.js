// Change the status of a single task, for example from 'in progress'  to 'done'
function changeTaskStatus(_id, newStatus) {
  axios
    .patch("/task/move", { taskId: _id, newStatus: newStatus })
    .then(function (response) {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// When the user types in a note an event is triggered to modify the note in the database
$(".task-description").bind("input propertychange", function () {
  taskId = $(this).attr("data-note-id");
  newDescription = this.value;
  axios.patch("/task/edit", { taskId: taskId, newDescription: newDescription });
});

// Add a new task to a specified board with a specified status
function addNewTask(idBoard, status) {
  axios
    .post("/task/add", { idBoard, status })
    .then(function (response) {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Delete a specified task
function deleteTask(idTask) {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to delete the task?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios
        .delete("/task/delete", { data: { idTask } })
        .then(function (response) {
          swal("The task has been deleted!", {
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      swal("Your task is safe!");
    }
  });
}

// Add a new empty board
function addNewBoard() {
  axios
    .post("/board/add")
    .then(function (response) {
      window.location = response.data.redirect;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Delete a specified board
function deleteBoard(Idboard, boardTitle) {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to delete the '${boardTitle}' board?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios
        .delete(`/board/delete/${Idboard}`)
        .then(function (response) {
          swal("The board has been deleted!", {
            icon: "success",
          }).then(() => {
            window.location = "/board/";
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      swal("Your board is safe!");
    }
  });
}

// Event to change the title (in the DB) of a certain board when the input tag for the title lost the focus
$(".board-title").focusout(function () {
  boardId = $(this).attr("data-board-id");
  newTitle = this.value;
  axios
    .patch("/board/edit", { boardId: boardId, newTitle: newTitle })
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
});

// Draw progress circle of the board
function drawCircleLoader() {
  completionRate = Number($("#circularloadingTool").attr("data-board"));

  if (Number.isNaN(completionRate)) {
    return;
  }

  let ctx = document.getElementById("circularloadingTool").getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.lineWidth = 15;
  ctx.fillStyle = "#2CF6B3";
  ctx.strokeStyle = "#2CF6B3";
  ctx.textAlign = "center";
  ctx.font = "20px monospace";
  ctx.fillText(
    `${Math.floor(completionRate * 100)}%`,
    ctx.canvas.width * 0.5,
    ctx.canvas.height * 0.5
  );
  ctx.beginPath();
  ctx.arc(80, 80, 50, -Math.PI / 2, 2 * Math.PI * completionRate - Math.PI / 2);
  ctx.stroke();
}

$(document).ready(function () {
  drawCircleLoader();
});
