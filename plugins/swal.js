import Swal from 'sweetalert2';

export default function swal(_context, inject) {
	inject('swal', Swal);
}