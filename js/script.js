var inList = false;
var myVeg = "";
var vegetables = ["onion","spinach","tomato","potato"];

console.log(vegetables.length);
console.log(vegetables.push('asparagus'));
console.log(vegetables);

function display(){
	for (var i = 0; i <vegetables.length; i++) {
		$('#veg_list').append('<li>' + vegetables[i] + '</li>');
	};
}
display();

$('#test').click(function(){

	myVeg = $('#test_veg').val();
	for(var i = 0; i < vegetables.length; i++){
		if(vegetables[i] === myVeg){
			inList = true;
			test();
			return;
		}else{
			inList = false;
			test();
		}
	}
});

function test(){
	console.log('test works');
	if(inList === true){
		$('#output').html(myVeg + " is in the list");
	}else{
		$('#output').html(myVeg + " is NOT in the list");
	}
}

$('#add').click(function(){

	var new_veggie= $('#add_veg').val();
	var veg_in_list= true;

	//Check whether the veggie already exists to avoid dup;icate entry
	for(var i = 0; i < vegetables.length; i++){
		if(vegetables[i] === new_veggie){
			veg_in_list = false;
			return;
		}
	}

	if(veg_in_list){
		vegetables.push(new_veggie);
	}
	
	$('#veg_list').html('');
	display();
});

