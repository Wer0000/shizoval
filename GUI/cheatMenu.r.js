let cheatMenuCode = `
<div class="shizoval" id="shizoval_window">

	<style>
        .shizoval {
            left: 1%;
            top: 15%;
            position: fixed;
            z-index: 1000;
            display: flex;
        }

        .shizoval__content {
            padding: 15px;
            background: #140033;
            box-shadow: 0 5px 15px black;
            font-family: 'Roboto', sans-serif;
            color: white;
            font-size: 0.9375rem;
            font-weight: 500;
            border-radius: 15px;
        }
	</style>

	<div class="shizoval__content">
		<center>shizoval</center><hr>

		<div id="gameStates" style="display: none;">
			<p>AirBreak: <font id="airBreakStateColor" color="red"><label id="airBreakState">FALSE</label></font></p>
			<p>AirBreak Speed: <font color="#e699ff"><label id="airBreakSpeed">100</label></font></p>
			<p>Auto Mining: <font id="autoMiningStateColor" color="red"><label id="autoMiningState">FALSE</label></font></p>
		</div>

		<div id="infoWindow">
			<p>Free cheat for tanki online by sheezzmee</p>
			<p>Use only on the test server</p>
			<p><a href="https://github.com/sheezzmee/shizoval" target="_blank" rel="noopener noreferrer">Cheat source</a></p>
		</div>

	</div>
	
	<script>
		document.addEventListener('keyup', function (evt)
		{
			if (evt.keyCode === 45)
			{
				if (document.getElementById("shizoval_window").style.display == "none")
				{
					document.getElementById("shizoval_window").style.display = "";
				}
				else
				{
					document.getElementById("shizoval_window").style.display = "none";
				}
			}
		});
	</script>
	
</div>
`;