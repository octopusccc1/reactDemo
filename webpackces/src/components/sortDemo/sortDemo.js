import React from 'react';

const list1 = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
let n = 0;
class sortDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    swap = (arr, indexA, indexB) => {
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
    }
    bubbleSort = (arr, compare) => {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    this.swap(arr, j, j + 1)
                }
                n++

            }
            
        }
        return arr;
    }
    bubbleSort2(arr) {
        let i = arr.length - 1;
        while (i > 0) {
            let pos = 0;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    pos = j
                    this.swap(arr, j, j + 1)

                }

            }
            i = pos
            n++
        }
        return arr;
    }
    bubbleSort3 = (arr) => {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            for (let i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    this.swap(arr, i, i + 1);
                }

            }
            end -= 1;
            for (let i = end; i > start; i--) {
                if (arr[i - 1] > arr[i]) {
                    this.swap(arr, i - 1, i);
                }

            }
            start += 1
            n++
        }
        return arr;
    }
    bubbleSort4 = (arr, compare) => {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            let endPos = 0;
            let startPos = 0;
            for (let i = start; i < end; i++) {
                if (compare(arr[i], arr[i + 1])>0) {
                    endPos = i;
                    this.swap(arr, i, i + 1);
                }
                n++;
            }
            end = endPos;
            for (let i = end; i > start; i--) {
                if (compare(arr[i - 1] , arr[i])>0) {
                    startPos = i;
                    this.swap(arr, i - 1, i);
                }
                n++;
            }
            start = startPos;

        }
        return arr;
    }
    componentDidMount() {
        let aa = this.bubbleSort4(list1, (a, b) => (b-a))
        console.log(aa, n)
    }
    render() {

        return (
            <div>
                111
            </div>
        )
    }
}
export default sortDemo;