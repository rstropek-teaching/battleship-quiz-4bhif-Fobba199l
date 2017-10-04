$(() => {
  // Select table containing the battleground
  const battleground = $('#battleground');

  // Build 10 x 10 grid for battleground
  for (let row = 0; row < 10; row++) {
    // Create table row
    const tr = $('<tr>');
    for (let column = 0; column < 10; column++) {
      // Create table cell with CSS class `water`. Note that we use
      // HTML data attributes  to store the coordinates of each cell
      // (see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). 
      // That makes it much easier to find cells based on coordinates later.
      $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
    }

    // Add table row to battleground table
    tr.appendTo(battleground);
  }

  $('#generate').click(() => {

    const checkSurrounding = function(status, r, c){
      var r_begin = r-1;
      var c_begin = c-1;
      var check;
      var count = 0;

      if(status == "start"){
        for(let i = r_begin; i <= r+1; i++){
          for(let j = c_begin; j <= c+1; j++){
            if(i != r && j != c){
              check = $('td[data-r=i][data-c=j]').getClassName;
              if(check == "ship"){
                return false;
              }
            }
          }
        }
        return true;
      }

      for(let i = r_begin; i <= r+1; i++){
        for(let j = c_begin; j <= c+1; j++){
          if(i != r && j != c){
            check = $('td[data-r=i][data-c=j]').getClassName;
            if(check == "ship"){
              count++;
              if(count > 1){
                return false;
              }
            }
          }
        }
      }
      return true;  
    }

    var r = 0;
    var c = 0;
    var direction = 0;
    var carrier_set = false;
    var battleship_set = false;
    var cruiser_set = false;
    var submarine_set = false;
    var destroyer_set = false;
    var save1 = [0, 0];
    var save2 = [0, 0];
    var save3 = [0, 0];
    var save4 = [0, 0];
    var save5 = [0, 0];
    var test;

    while(!carrier_set){
      r = Math.floor(Math.random()*10)+1;
      c = Math.floor(Math.random()*10)+1;
      direction = Math.floor(Math.random()*2)+1; //2 nach recht; 1 nach unten;
      test = checkSurrounding("start", r, c);
      if(test){
        save1 = [r, c];
        if(direction = 1){
          c++;
          test = checkSurrounding("began", r, c);
          if(test){
            save2 = [r, c];
            c++;
            test = checkSurrounding("began", r, c);
            if(test){
              save3 = [r, c];
              c++;
              test = checkSurrounding("began", r, c);
              if(test){
                save4 = [r, c];
                c++;
                test = checkSurrounding("began", r, c);
                if(test){
                  save5 = [r, c];
                  $('td[data-r=save1[0]][data-c=save1[1]]').removeClass('water').addClass('ship');
                  $('td[data-r=save2[0]][data-c=save2[1]]').removeClass('water').addClass('ship');
                  $('td[data-r=save3[0]][data-c=save3[1]]').removeClass('water').addClass('ship');
                  $('td[data-r=save4[0]][data-c=save4[1]]').removeClass('water').addClass('ship');
                  $('td[data-r=save5[0]][data-c=save5[1]]').removeClass('water').addClass('ship');
                  carrier_set = true;
                }
              }
            }
          }
        }
      }
    }

    while(!battleship_set){
      r = Math.floor(Math.random()*10)+1;
      c = Math.floor(Math.random()*10)+1;
      direction = Math.floor(Math.random()*2)+1; //2 nach recht; 1 nach unten;
      test = checkSurrounding("start", r, c);
      if(test){
        save1 = [r, c];
        if(direction = 1){
          c++;
          test = checkSurrounding("began", r, c);
          if(test){
            save2 = [r, c];
            c++;
            test = checkSurrounding("began", r, c);
            if(test){
              save3 = [r, c];
              c++;
              test = checkSurrounding("began", r, c);
              if(test){
                save4 = [r, c];
                $('td[data-r=save1[0]][data-c=save1[1]]').removeClass('water').addClass('ship');
                $('td[data-r=save2[0]][data-c=save2[1]]').removeClass('water').addClass('ship');
                $('td[data-r=save3[0]][data-c=save3[1]]').removeClass('water').addClass('ship');
                $('td[data-r=save4[0]][data-c=save4[1]]').removeClass('water').addClass('ship');
                battleship_set = true;
              }
            }
          }
        }
      }
    }

    while(!cruiser_set){
      r = Math.floor(Math.random()*10)+1;
      c = Math.floor(Math.random()*10)+1;
      direction = Math.floor(Math.random()*2)+1; //2 nach recht; 1 nach unten;
      test = checkSurrounding("start", r, c);
      if(test){
        save1 = [r, c];
        if(direction = 1){
          c++;
          test = checkSurrounding("began", r, c);
          if(test){
            save2 = [r, c];
            c++;
            test = checkSurrounding("began", r, c);
            if(test){
              save3 = [r, c];
              $('td[data-r=save1[0]][data-c=save1[1]]').removeClass('water').addClass('ship');
              $('td[data-r=save2[0]][data-c=save2[1]]').removeClass('water').addClass('ship');
              $('td[data-r=save3[0]][data-c=save3[1]]').removeClass('water').addClass('ship');
              cruiser_set = true;
            }
          }
        }
      }
    }

    while(!submarine_set){
      r = Math.floor(Math.random()*10)+1;
      c = Math.floor(Math.random()*10)+1;
      direction = Math.floor(Math.random()*2)+1; //2 nach recht; 1 nach unten;
      test = checkSurrounding("start", r, c);
      if(test){
        save1 = [r, c];
        if(direction = 1){
          c++;
          test = checkSurrounding("began", r, c);
          if(test){
            save2 = [r, c];
            c++;
            test = checkSurrounding("began", r, c);
            if(test){
              save3 = [r, c];
              $('td[data-r=save1[0]][data-c=save1[1]]').removeClass('water').addClass('ship');
              $('td[data-r=save2[0]][data-c=save2[1]]').removeClass('water').addClass('ship');
              $('td[data-r=save3[0]][data-c=save3[1]]').removeClass('water').addClass('ship');
              submarine_set = true;
            }
          }
        }
      }
    }

    while(!destroyer_set){
      r = Math.floor(Math.random()*10)+1;
      c = Math.floor(Math.random()*10)+1;
      direction = Math.floor(Math.random()*2)+1; //2 nach recht; 1 nach unten;
      test = checkSurrounding("start", r, c);
      if(test){
        save1 = [r, c];
        if(direction = 1){
          c++;
          test = checkSurrounding("began", r, c);
          if(test){
            save2 = [r, c];
            $('td[data-r=save1[0]][data-c=save1[1]]').removeClass('water').addClass('ship');
            $('td[data-r=save2[0]][data-c=save2[1]]').removeClass('water').addClass('ship');
            destroyer_set = true;
          }
        }
      }
    }
    // $('td[data-r="1"][data-c="1"]').removeClass('water').addClass('ship');
    // $('td[data-r="2"][data-c="1"]').removeClass('water').addClass('ship');
    // $('td[data-r="3"][data-c="1"]').removeClass('water').addClass('ship');
  });
});