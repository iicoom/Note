/*
package painkiller

import "fmt"

type Pill int

const (
	Placebo Pill = iota
	Aspirin
	Ibuprofen
	Paracetamol
	Acetaminophen = Paracetamol
)

// 为了调试的需要，我们会为这些常量定义String()签名方法：
func (p Pill) String() string {
	switch p {
	case Placebo:
		return "Placebo"
	case Aspirin:
		return "Aspirin"
	case Ibuprofen:
		return "Ibuprofen"
	case Paracetamol: // == Acetaminophen
		return "Paracetamol"
	}
	return fmt.Sprintf("Pill(%d)", p)
}
*/

// 这里，我们可以用go generate来实现String():
//go:generate stringer -type=Pill
package painkiller

type Pill int

const (
	Placebo Pill = iota
	Aspirin
	Ibuprofen
	Paracetamol
	Acetaminophen = Paracetamol
)
