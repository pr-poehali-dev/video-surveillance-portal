import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MapView = () => {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  const cameras = [
    { id: 1, name: 'Камера №45', district: 'Центральный', x: 35, y: 40, status: 'online' },
    { id: 2, name: 'Камера №12', district: 'Дзержинский', x: 55, y: 30, status: 'online' },
    { id: 3, name: 'Камера №89', district: 'Ленинский', x: 45, y: 60, status: 'online' },
    { id: 4, name: 'Камера №156', district: 'Свердловский', x: 65, y: 50, status: 'online' },
    { id: 5, name: 'Камера №203', district: 'Индустриальный', x: 25, y: 70, status: 'online' },
    { id: 6, name: 'Камера №78', district: 'Мотовилихинский', x: 70, y: 35, status: 'offline' },
    { id: 7, name: 'Камера №134', district: 'Кировский', x: 40, y: 25, status: 'online' },
  ];

  const districts = [
    { name: 'Центральный', cameras: 42, color: 'bg-primary' },
    { name: 'Дзержинский', cameras: 38, color: 'bg-accent' },
    { name: 'Ленинский', cameras: 35, color: 'bg-primary' },
    { name: 'Свердловский', cameras: 41, color: 'bg-accent' },
    { name: 'Индустриальный', cameras: 33, color: 'bg-primary' },
    { name: 'Мотовилихинский', cameras: 36, color: 'bg-accent' },
    { name: 'Кировский', cameras: 22, color: 'bg-primary' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Карта Пермского края</h2>
          <p className="text-muted-foreground">Геолокация камер видеонаблюдения</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="ZoomIn" size={18} className="mr-2" />
            Увеличить
          </Button>
          <Button variant="outline">
            <Icon name="Layers" size={18} className="mr-2" />
            Слои
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] bg-secondary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={64} className="text-muted-foreground opacity-30 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Карта Пермского края</p>
                  </div>
                </div>

                {cameras.map((camera) => (
                  <button
                    key={camera.id}
                    onClick={() => setSelectedCamera(camera.id)}
                    className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                      camera.status === 'online' 
                        ? 'bg-accent border-2 border-accent shadow-lg shadow-accent/50' 
                        : 'bg-destructive border-2 border-destructive'
                    } ${selectedCamera === camera.id ? 'scale-125 ring-4 ring-primary/50' : ''}`}
                    style={{ left: `${camera.x}%`, top: `${camera.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <Icon name="Video" size={20} className="text-white" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedCamera && (
            <Card className="mt-4 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Информация о камере</span>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedCamera(null)}>
                    <Icon name="X" size={18} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cameras
                  .filter(c => c.id === selectedCamera)
                  .map(camera => (
                    <div key={camera.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-lg">{camera.name}</p>
                          <p className="text-sm text-muted-foreground">{camera.district} район</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${camera.status === 'online' ? 'bg-accent' : 'bg-destructive'}`}></div>
                          {camera.status === 'online' ? 'В сети' : 'Не в сети'}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Video" size={18} className="mr-2" />
                          Просмотр
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Settings" size={18} className="mr-2" />
                          Настройки
                        </Button>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Районы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {districts.map((district, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${district.color}`}></div>
                      <span className="font-medium text-foreground">{district.name}</span>
                    </div>
                    <Badge variant="outline">{district.cameras} камер</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" size={20} />
                Легенда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Icon name="Video" size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-foreground">Камера в сети</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                    <Icon name="Video" size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-foreground">Камера не в сети</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapView;
