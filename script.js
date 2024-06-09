                var turn = 1;
                var board= [0,0,0, 0,0,0, 0,0,0]
                var box1 = document.querySelector("#box1");
                var box2 = document.querySelector("#box2");
                var box3 = document.querySelector("#box3");
                var box4 = document.querySelector("#box4");
                var box5 = document.querySelector("#box5");
                var box6 = document.querySelector("#box6");
                var box7 = document.querySelector("#box7");
                var box8 = document.querySelector("#box8");
                var box9 = document.querySelector("#box9");
                var win1 = document.querySelector("#winner1");
                var win2 = document.querySelector("#winner2");

                box1.addEventListener('click', function(){
                    if(turn == 1){
                        board[0] = 1;
                        box1.style.display = 'block';
                        box1.textContent = "X";
                        turn = 2;
                        console.log(board[0]);
                    }else{
                        board[0] = 2;
                        box1.style.display = 'block';
                        box1.textContent = "O";
                        turn = 1;
                        console.log(board[0]);
                    }
                    checkWin();
                    box1.disabled = true;
                })
                box2.addEventListener('click', function(){
                    if(turn == 1){
                        board[1] = 1;
                        box2.style.display = 'block';
                        box2.textContent = "X";
                        turn = 2;
                    }else{
                        board[1] = 2;
                        box2.style.display = 'block';
                        box2.textContent = "O";
                        turn = 1;
                    }                 
                    checkWin();
                    box2.disabled = true;
                })
                box3.addEventListener('click', function(){
                    if(turn == 1){
                        board[2] = 1;
                        box3.style.display = 'block';
                        box3.textContent = "X";
                        turn = 2;
                    }else{
                        board[2] = 2;
                        box3.style.display = 'block';
                        box3.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box3.disabled = true;
                })
                box4.addEventListener('click', function(){
                    if(turn == 1){
                        board[3] = 1;
                        box4.style.display = 'block';
                        box4.textContent = "X";
                        turn = 2;
                    }else{
                        board[3] = 2;
                        box4.style.display = 'block';
                        box4.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box4.disabled = true;
                })
                box5.addEventListener('click', function(){
                    if(turn == 1){
                        board[4] = 1;
                        box5.style.display = 'block';
                        box5.textContent = "X";
                        turn = 2;
                    }else{
                        board[4] = 2;
                        box5.style.display = 'block';
                        box5.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box5.disabled = true;
                })
                box6.addEventListener('click', function(){
                    if(turn == 1){
                        board[5] = 1;
                        box6.style.display = 'block';
                        box6.textContent = "X";
                        turn = 2;
                    }else{
                        board[5] = 2;
                        box6.style.display = 'block';
                        box6.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box6.disabled = true;
                })
                box7.addEventListener('click', function(){
                    if(turn == 1){
                        board[6] = 1;
                        box7.style.display = 'block';
                        box7.textContent = "X";
                        turn = 2;
                    }else{
                        board[6] = 2;
                        box7.style.display = 'block';
                        box7.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box7.disabled = true;
                })
                box8.addEventListener('click', function(){
                    if(turn == 1){
                        board[7] = 1;
                        box8.style.display = 'block';
                        box8.textContent = "X";
                        turn = 2;
                    }else{
                        board[7] = 2;
                        box8.style.display = 'block';
                        box8.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box8.disabled = true;
                })
                box9.addEventListener('click', function(){
                    if(turn == 1){
                        board[8] = 1;
                        box9.style.display = 'block';
                        box9.textContent = "X";
                        turn = 2;
                    }else{
                        board[8] = 2;
                        box9.style.display = 'block';
                        box9.textContent = "O";
                        turn = 1;
                    }
                    checkWin();
                    box9.disabled = true;
                })

                function checkWin(){
                    if(board[0] == 1 && board[1] == 1 && board[2] == 1 ||
                    board[0] == 2 && board[1] == 2 && board[2] == 2){
                        disableButtons();
                        if (board[0] == 1){
                            win1.style.display = "block";
                        }else{
                            win2.style.display = "block";
                        }      
                    } 
                    else if(board[3] == 1 && board[4] == 1 && board[5] == 1 ||
                        board[3] == 2 && board[4] == 2 && board[5] == 2){
                            disableButtons();
                            if (board[4] == 1){
                                win1.style.display = "block";
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[6] == 1 && board[7] == 1 && board[8] == 1 ||
                        board[6] == 2 && board[7] == 2 && board[8] == 2){
                            disableButtons();
                            if (board[7] == 1){
                                win1.style.display = "block";
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[0] == 1 && board[3] == 1 && board[6] == 1 ||
                        board[0] == 2 && board[3] == 2 && board[6] == 2){
                            disableButtons();
                            if (board[0] == 1){
                                win1.style.display = "block";
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[1] == 1 && board[4] == 1 && board[7] == 1 ||
                        board[1] == 2 && board[4] == 2 && board[7] == 2){
                            disableButtons();
                            if (board[1] == 1){
                                win1.style.display = "block";
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[2] == 1 && board[5] == 1 && board[8] == 1 ||
                        board[2] == 2 && board[5] == 2 && board[8] == 2){
                            disableButtons();
                            if (board[2] == 1){
                                win1.style.display = "block";
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[0] == 1 && board[4] == 1 && board[8] == 1 ||
                        board[0] == 2 && board[4] == 2 && board[8] == 2){
                            disableButtons();
                            if (board[0] == 1){
                                win1.style.display = "block";
                                
                            }else{
                                win2.style.display = "block";
                            }      
                        }
                    else if(board[2] == 1 && board[4] == 1 && board[6] == 1 ||
                            board[2] == 2 && board[4] == 2 && board[6] == 2){
                                disableButtons();
                                if (board[2] == 1){
                                    win1.style.display = "block";
                                }else{
                                    win2.style.display = "block";
                                }      
                            }
                }
                const restart = document.querySelector("#restart");
                restart.addEventListener('click', function(){
                    box1.textContent="";
                    box2.textContent="";
                    box3.textContent="";
                    box4.textContent="";
                    box5.textContent="";
                    box6.textContent="";
                    box7.textContent="";
                    box8.textContent="";
                    box9.textContent="";
                    box1.display="none";
                    box2.display="none";
                    box3.display="none";
                    box4.display="none";
                    box5.display="none";
                    box6.display="none";
                    box7.display="none";
                    box8.display="none";
                    box9.display="none";
                    box1.disabled = false;
                    box2.disabled = false;
                    box3.disabled = false;
                    box4.disabled = false;
                    box5.disabled = false;
                    box6.disabled = false;
                    box7.disabled = false;
                    box8.disabled = false;
                    box9.disabled = false;
                    turn = 1;
                    win1.style.display = "none";
                    win2.style.display = "none";
                    board[0] = 0;
                    board[1] = 0;
                    board[2] = 0;
                    board[3] = 0;
                    board[4] = 0;
                    board[5] = 0;
                    board[6] = 0;
                    board[7] = 0;
                    board[8] = 0;

                })
                function disableButtons(){
                    box1.disabled = true;
                    box2.disabled = true;
                    box3.disabled = true;
                    box4.disabled = true;
                    box5.disabled = true;
                    box6.disabled = true;
                    box7.disabled = true;
                    box8.disabled = true;
                    box9.disabled = true;
                    
                }

