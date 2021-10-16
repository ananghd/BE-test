/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  function clean(object) {
    Object
       .entries(object)
       .forEach(([k, v]) => {
          if (v && typeof v === 'object') {
             clean(v);
          }
          if (v && typeof v === 'object' && !Object.keys(v).length || v === null || v === undefined) {
             if (Array.isArray(object)) {
                object.splice(k, 1);
             } else {
                delete object[k];
             }
          }
       });
    return object;
  }
  return data;
  //return JSON.stringify(clean(data), null, 2);
}

console.log(result(data));
