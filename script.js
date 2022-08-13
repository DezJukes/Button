function DarkMode() {
            var element = document.body;
            element.classList.toggle("light-mode");
            var element = document.getElementById("Button")
            if (element.value == "Lights On!") element.value = "Go Dark?";
            else element.value = "Lights On!";
        }
