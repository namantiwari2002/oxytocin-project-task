var element_pos = 0;    // POSITION OF THE NEWLY CREATED ELEMENTS.
    var iCnt = 0;

    $(document).ready(function() {

        // $(function() { $('#divContainer').draggable(); });

        let postList = document.querySelectorAll("#divContainer")

              for (let i = 0; i < postList.length; i++){
                $(function() { postList[i].draggable(); });
              }

    });
      