var numberofButton = document.querySelectorAll(".btn").length;

for (i = 0; i < numberofButton; i++) {
  document
    .querySelectorAll(".btn")
    [i].addEventListener("dblclick", handleClick);
}
function handleClick() {
  swal(
    {
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false,
    },
    function (isConfirm) {
      if (isConfirm) {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      } else {
        swal("Cancelled", "Your imaginary file is safe :)", "error");
      }
    }
  );
}
