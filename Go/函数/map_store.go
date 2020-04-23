package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

type MapTpl struct {
	ID                 int     `json:"ID"`
	Name               string  `json:"Name"`
	DifficultyLevel    int     `json:"DifficultyLevel"`
	DifficultyScore    float32 `json:"DifficultyScore"`
	RoadType           int     `json:"RoadType"`
	RoadTypeNameID     int     `json:"RoadTypeNameID"`
	RoadTypeIconName   string  `json:"RoadTypeIconName"`
	LapTime            int     `json:"LapTime"`
	LapCount           int     `json:"LapCount"`
	SceneName          string  `json:"SceneName"`
	PrevieID           string  `json:"PrevieId"`
	ThumbnailID        string  `json:"ThumbnailID"`
	PossibleSceneStyle []int   `json:"PossibleSceneStyle"`
	BgmName            string  `json:"BgmName"`
	BgmVolume          float32 `json:"BgmVolume"`
	PlayerLevelNeed    int     `json:"PlayerLevelNeed"`
	DayToUnlock        int     `json:"DayToUnlock"`
	State              int     `json:"State"`
	DefaultMinimapID   string  `json:"DefaultMinimapId"`
	OtherMinimapID     string  `json:"OtherMinimapId"`
}

type MapStore struct {
	All      []MapTpl `json:"_all"`
	idToData map[int]*MapTpl
}

func (instance *MapStore) init(dataRootDir string) {
	raw, err := ioutil.ReadFile(dataRootDir + "MapStore.json")
	if err != nil {
		log.Fatal(err)
	}

	err = json.Unmarshal(raw, instance)
	if err != nil {
		log.Fatal(err)
	}

	instance.idToData = make(map[int]*MapTpl)
	for i := 0; i < len(instance.All); i++ {
		internal := &(instance.All[i])
		if _, ok := instance.idToData[internal.ID]; !ok {
			log.Printf("%v", internal)
			instance.idToData[internal.ID] = internal
		}
	}
}

func main() {
	MapStore := new(MapStore)
	MapStore.init("./")
	println(MapStore.idToData)
}
