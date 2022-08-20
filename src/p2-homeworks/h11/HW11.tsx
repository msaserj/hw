import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    function onchangeRange (valueRange: number) {
        setValue1(valueRange)
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 11</h3>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onchangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <form>
                    <div data-role="rangeslider">
                        <label htmlFor="range-1a">Rangeslider:</label>
                        <input type="range" name="range-1a" id="range-1a" min="0" max="100" value="40"
                               data-popup-enabled="true" data-show-value="true"/>
                        <label htmlFor="range-1b">Rangeslider:</label>
                        <input type="range" name="range-1b" id="range-1b" min="0" max="100" value="80"
                               data-popup-enabled="true" data-show-value="true"/>
                    </div>
                </form>

                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
