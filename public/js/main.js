$(document).ready(function(){
	$('.delete-article').on('click', function(e){
		$target = $(e.target);
		console.log('e: ', $target)
		const id = $target.attr('data-id');
		console.log('id: ', id)

		$.ajax({
			type: 'DELETE',
			url: '/articles/'+id,
			success: (response)=>{
				alert('Deleting Article');
				window.location.href="/"
			},
			error: (err)=>{
				console.log('Error while deleting: ', err);
			}
		})
	});

	

})

