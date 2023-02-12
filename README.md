# React Todo List

## Installasi FontAwesom & Framwork Bootstrap

    Todo:
        1.  Fontawesome
            - link: https://fontawesome.com/docs/web/use-with/react/
            - npm i --save @fortawesome/react-fontawesome@latest
            - npm i --save @fortawesome/free-solid-svg-icons
        2.  React-strap
            - link : https://reactstrap.github.io/?path=/story/home-installation--page
            - npm install --save bootstrap
        3.  App.js
        4.  App.css

## Logic & Styling list todo

    Todo:

        1.  App.js
            - Tasks (ToDO List) State
            - Temp state
            - All function in Todo
            - Display ToDos
            - Display ToDos
        2.  App.css
            styling css

## Memasang Icon Fontawesome & styling

    Todo:

        1.  App.js
            - memasang fontawesome
        2.  App.css
            styling icon

## addTask function dan keterangan icon

    Todo:

        1.  App.js
            - function addTask
            - form input dan button addTask
            - pasang keterangan setiap icon saat cursor diarahkan
        2.  pengujian pada browser:
            - lakukan add taks, jika berhasil akan ada data baru yang barusan di buat
            - arahkan cursor ke tiap2 icon

## Delete tasks function

    Todo:

        1.  App.js
            - function Delete tasks
            - memasang function deleteTask pada button
        2.  pengujian pada browser:
            - lakukan delete taks, jika berhasil data akan terhapus setiap kali icon trash di klik
            - jika kosong akan menampilkan kalimat no task..

## Mark tasks as done or completed Function

    Todo:

        1.  App.js
            - function markDone()
            - memasang function markDone() pada button
            - pasang kodisi jika task sudah di checklis tombol edit ilang
        2.  pengujian pada browser:
            - lakukan klik centang pada taks, jika berhasil title taks akan tercoret dan button edit akan terhapus

## Function cangeTask()

    Todo:

        1.  App.js
            - function changeTask()
            - memasang function changeTask() pada insert onChange()
            - function cancelUpdate()
        2.  pengujian pada browser:
            - lakukan klik icon pencil pada taks, jika berhasil title akan berada pada form update
            - coba ubah tulisan pada form update

## Function updateTask() & memasang function cancelUpdate() pada button

    Todo:

        1.  App.js
            - function updateTask()
            - memasang function updateTask() pada onClick() di dalam button update
            - memasang function cancelUpdate() pada onClick() di dalam button cancel update
            - memberi kondisi jika tombol update di klik akan menampilkan form update jika tidak form addTask yang tampil
        2.  pengujian pada browser:
            - lakukan klik icon pencil pada taks, jika berhasil form akan berganti menjadi form update
              dan  title akan berada pada form update
            - coba ubah tulisan pada form update, jika berhasil terupdate maka setup yang kita lakukan berhasil
            - jika tidak jadi mengupdate klik tombol cancel, maka form update akan terganti dengan form addTask
              dan data tidak berubah

## Aplikasikan menjadi Components

    Todo:

        1.  src/components/ToDo.jsx
            - buat functional ToDo
            - cut code dari App.js bagian menampilkan data dari todo dengan map kemudian pastekan di Todo.jsx
            - cut dan import Fontawesome dan icon svgnya
        2.  src/components/AddTaskForm.jsx
            - buat functional AddTaskForm
            - cut code dari App.js bagian Add Task kemudian pastekan di AddTaskForm
        3.  src/components/UpdateForm.jsx- buat functional AddTaskForm
            - buat functional UpdateForm
            - cut code dari App.js bagian Update Task kemudian pastekan di UpdateForm
        4.  src/App.js
            - panggil props ToDo
            - panggil props AddTaskForm
            - panggil props UpdateForm
        5.  pengujian pada browser:
            - lakukan semua action dari addTask, UpdateTask, cheklist Task, dan delete
              jika semua berjalan normal maka setup yang kita lakukan berhasil.

## Perbaikan style css dan sorting berdasarkan id task

    Todo:

        1.  src/components/ToDo.jsx
            - sorting  pada array toDo yang mengurutkan elemen-elemennya berdasarkan nilai properti id secara menaik
        2.  src/App.css
            - perbaikan code css untuk background-color
        3.  pengujian pada browser:
            - lakukan semua action dari addTask, UpdateTask (urutan akan tetap sama sesuai id nya), cheklist Task, dan delete
              jika semua berjalan normal maka setup yang kita lakukan berhasil.
